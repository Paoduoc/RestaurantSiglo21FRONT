import React, { useState } from 'react'
import { ProductList } from './ProductList'
import { useDispatch } from 'react-redux';
import { setFormType, setModalCrudVisibility } from '../../store/slices/productSlice';
import { ProductDialog } from './ProductDialog';

export const ProductCrud = () => {

  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('create'))
  }

  return (
    <>
      <div className='flex centered mt-30'>
        <div className="flex centered column">
          <h1>Mantenedor de productos</h1>
          <button
            type="button"
            className='btn btn-primary mt-20'
            onClick={handleShow}>Crear producto</button>
        </div>
      </div>
      <div className='flex centered mt-30'>
        <div className="flex centered column w-50" style={{'fontSize': '20px', 'color': 'white'}}>
          <ProductList/>
        </div>
      </div>
      <ProductDialog/>
    </>
  )
}
