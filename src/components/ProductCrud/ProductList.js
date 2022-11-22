import React, { useEffect, useState } from 'react'
import { enableProduct, getAllProducts } from '../../services/productService'
import Button from 'react-bootstrap/Button';
import Switch from "react-switch";
import { useDispatch, useSelector, } from 'react-redux';
import { setAllProducts, setFormType, setModalCrudVisibility, setSelectedProduct } from '../../store/slices/productSlice';
import { getAllBodegas } from '../../services/bodegaService';

export const ProductList = () => {

  const dispatch = useDispatch()

  const { allProducts } = useSelector((state) => state.product)

  const handleShow = (selectedProduct) => {
    dispatch(setSelectedProduct(selectedProduct))
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('edit'))
  }

  const handleGetAllProducts = async () => {
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

  const handleStatusProduct = async (product) => {
    await enableProduct({
      status: !product.estado,
      _id: product._id
    })
    handleGetAllProducts()
  }

  useEffect(() => {
    handleGetAllProducts()
  }, [])
  

  return (
    <>
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Tipo</th>
            {/* <th scope="col">Gramos Dispo</th>
            <th scope="col">Gramos Min</th>
            <th scope="col">Gramos Max</th> */}
            <th scope="col">Editar</th>
            <th scope="col">Activar/Desactivar</th>
          </tr>
        </thead>
        <tbody>
          {
            allProducts.map(p => (
              <tr key={ p._id }>
                <td>{ p.nombreProducto }</td>
                <td>{ p.tipo }</td>
                {/* <td>{ p.gramosDispo }</td>
                <td>{ p.gramosMin }</td>
                <td>{ p.gramosMax }</td> */}
                <td>
                  <Button variant="primary" onClick={() => handleShow(p)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Switch onChange={() => handleStatusProduct(p)} checked={p.estado} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
