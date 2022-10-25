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
  cantidad,
  cantidadMin,
  formType
}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [name, setName] = useState(nombreProducto)
  const [type, setType] = useState(tipo)
  const [ammount, setAmmount] = useState(cantidad)
  const [minAmmount, setMinAmmount] = useState(cantidadMin)
  const [isLoading, setIsLoading] = useState(false)

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
    if (isLoading === true) return
    setIsLoading(true)
    const response = await ProductService[`${formType}Product`]({
      _id,
      name,
      type,
      ammount,
      minAmmount,
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
    setIsLoading(false)
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
                <label className='form-label'>Cantidad</label>
                <input className='form-control' type="number" value={ammount} onChange={(event) => setAmmount(event.target.value)} />
                <label className='form-label'>Cantidad Min</label>
                <input className='form-control' type="number" value={minAmmount} onChange={(event) => setMinAmmount(event.target.value)} />
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
