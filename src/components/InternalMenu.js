import React from 'react'
import { useNavigate } from 'react-router-dom'

export const InternalMenu = () => {

  const navigate = useNavigate()

  const goTo = (route) => {
    navigate(route)
  }

  return (
    <div className='flex centered mt-30'>
      <div className="flex centered column" style={{height: '100%'}}>
        <h1>Menu interno</h1>
        <button type="button" className='btn btn-primary mt-20' onClick={() => goTo('/user-crud')}>Mantenedor de usuarios</button>
        <button type="button" className='btn btn-primary mt-20' onClick={() => goTo('/product-crud')}>Mantenedor de productos</button>
        <button type="button" className='btn btn-primary mt-20' onClick={() => goTo('/dishe-crud')}>Mantenedor de platos</button>
        <button type="button" className='btn btn-primary mt-20'>Boton2</button>
      </div>
    </div>
  )
}
