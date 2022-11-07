import React from 'react'

import ComprarPulsado from './comprar-pulsado'
import './plato.css'
import { addPlate, removePlate } from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux'

const Plato = (props) => {
  const {
    imagen,
    nombrePlato,
    descripcion,
    precio,
    cantidad
  } = props
  const dispatch = useDispatch()
  const handleAddPlate = () => {
    console.log(props)
    dispatch(addPlate(props))
  }

  const handleRemovePlate = () => {
    console.log(props._id)
    dispatch(removePlate(props._id))
  }

  return (
    <div className="plato-container">
      <img src={imagen} className="plato-image" alt=''/>
      <div className="plato-container1">
        <span className="plato-text">{nombrePlato}</span>
        <span className="plato-text1">{descripcion}</span>
        <span className="plato-text2">{`$${precio}`}</span>
        {
          cantidad ? (<span className="plato-text2">Cantidad seleccionada: {cantidad}</span>) : <></>
        }
        <br></br>
        <div className='carrito-botones'>
          <ComprarPulsado
            button1="+"
            rootClassName="comprar-pulsado-root-class-name"
            action={handleAddPlate}
          ></ComprarPulsado>
          {
            cantidad >= 1 
              ? (
                <ComprarPulsado
                  button1="-"
                  rootClassName="comprar-pulsado-root-class-name"
                  action={handleRemovePlate}
                ></ComprarPulsado>
              )
              : <></>
          }
        </div>
      </div>
    </div>
  )
}
export default Plato
