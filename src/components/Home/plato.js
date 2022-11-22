import React from 'react'

import ComprarPulsado from './comprar-pulsado'
import './plato.css'
import { addPlate, removePlate } from '../../store/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useAlert } from 'react-alert'


const Plato = (props) => {
  const alert = useAlert()
  const {
    imagen,
    nombrePlato,
    descripcion,
    precio,
    cantidad,
    cantP: cantidadMax
  } = props
  const dispatch = useDispatch()
  const handleAddPlate = () => {
    if (cantidad >= cantidadMax) {
      alert.show(`No puedes agregar mas platos`, {
        type: 'error'
      })
      return
    }
    dispatch(addPlate(props))
    alert.show(`Plato agregado exitosamente!`, {
      type: 'success'
    })
  }

  const handleRemovePlate = () => {
    dispatch(removePlate(props))
    alert.show(`Plato removido exitosamente!`, {
      type: 'success'
    })
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
