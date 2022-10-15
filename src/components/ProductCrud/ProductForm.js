import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import { useAlert } from 'react-alert'

import "react-datepicker/dist/react-datepicker.css";
import ProductService, { getAllProducts } from '../../services/productService'
import { useDispatch } from 'react-redux';
import { setAllProducts, setModalCrudVisibility } from '../../store/slices/productSlice';
import { getAllBodegas } from '../../services/bodegaService';

export const ProductForm = ({
  _id,
  nombreProducto,
  tipo,
  gramosDispo,
  gramosMin,
  gramosMax,
  formType
}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [name, setName] = useState(nombreProducto)
  const [type, setType] = useState(tipo)
  const [gDispo, setGDispo] = useState(gramosDispo)
  const [gMin, setGMin] = useState(gramosMin)
  const [gMax, setGMax] = useState(gramosMax)

  const updateAllProducts = async () => {
    // desde la bodega sacamos los productos con sus gramos
    const responseProduct = await getAllProducts()
    const responseBodega = await getAllBodegas()
    
    if (responseProduct.status === 200 && responseBodega.status === 200) {
      const productMerged = responseProduct.msg.map(p => {
        const pBodega = responseBodega.msg.find(pBodega => pBodega.nombreProducto === p.nombreProducto)
        return {
          ...pBodega,
          ...p,
        }
      })
      dispatch(setAllProducts(productMerged))
    }
  }

  const handleAction = async () => {
    const response = await ProductService[`${formType}Product`]({
      _id,
      name,
      type,
      gDispo,
      gMin,
      gMax,
    })
    console.log(response)
    if (response.status >= 400 && response.status <= 499) {
      alert.show(response.description, {
        type: 'error'
      })
    }
    if (response.status >= 200 && response.status <= 201) {
      updateAllProducts()
      alert.show(`Producto ${formType === 'create' ? 'creado' : 'modificado'} exitosamente!`, {
        type: 'success'
      })
      dispatch(setModalCrudVisibility(false))
    }
  }

  return (
      <div className='flex column'>
        <label className='form-label'>Nombre</label>
        <input className='form-control' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <label className='form-label'>Tipo</label>
        <input className='form-control' type="text" value={type} onChange={(event) => setType(event.target.value)} />
        {
          formType === 'create' ?
            (
              <div>
                <label className='form-label'>Gramos Dispo</label>
                <input className='form-control' type="text" value={gDispo} onChange={(event) => setGDispo(event.target.value)} />
                <label className='form-label'>Gramos Min</label>
                <input className='form-control' type="text" value={gMin} onChange={(event) => setGMin(event.target.value)} />
                <label className='form-label'>Gramos Max</label>
                <input className='form-control' type="text" value={gMax} onChange={(event) => setGMax(event.target.value)} />
              </div>
            ) :
            <div></div>
        }
        <button
          className={`btn btn-${formType === 'create' ? 'success' : 'warning'} mt-30`}
          onClick={() => handleAction()}
        >{formType === 'create' ? 'Crear' : 'Editar'}</button>
      </div>
    // </div>
  )
}