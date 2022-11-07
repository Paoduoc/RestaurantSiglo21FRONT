import React from 'react'
import { useNavigate } from 'react-router-dom'
import './InternalMenu.css'

export const InternalMenu = () => {

  const navigate = useNavigate()

  const goTo = (route) => {
    navigate(route)
  }

  return (
    <div className='chale'>
      <div className='body'>
        <div className='flex centered mt-30'>
          <div className="flex centered column" style={{height: '100%'}}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className='Title'>Menu interno</h1>
            <button type="button" className='btn btn-danger' onClick={() => goTo('/user-crud')}>Mantenedor de usuarios</button>
            <br></br>
            <button type="button" className='btn btn-danger' onClick={() => goTo('/product-crud')}>Mantenedor de productos</button>
            <br></br>
            <button type="button" className='btn btn-danger' onClick={() => goTo('/dishe-crud')}>Mantenedor de platos</button>
            <br></br>
            <button type="button" className='btn btn-danger' onClick={() => goTo('/table-crud')}>Mantenedor de mesas</button>
            <br></br>
            <button type="button" className='btn btn-danger' onClick={() => goTo('/reservation')}>Mantenedor de reservas</button>
            <br></br>
            <button type="button" className='btn btn-danger' onClick={() => goTo('/vault')}>Bodega</button>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  )
}
