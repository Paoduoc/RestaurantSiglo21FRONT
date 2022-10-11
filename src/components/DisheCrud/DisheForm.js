import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'

import "react-datepicker/dist/react-datepicker.css";
import DisheService, { getAllDishes } from '../../services/disheService'
import { useDispatch } from 'react-redux';
import { setAllDishes, setModalCrudVisibility } from '../../store/slices/disheSlice'
import Select from 'react-select';

export const DisheForm = ({
  _id,
  nombrePlato,
  precio,
  preparacion,
  tiempoPreparacion,
  ingredientes,
  formType
}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [name, setName] = useState(nombrePlato)
  const [price, setPrice] = useState(precio)
  const [preparation, setPreparation] = useState(preparacion)
  const [preparationTime, setPreparationTime] = useState(tiempoPreparacion)
  const [ingredients, setIngredients] = useState(ingredientes)

  const updateAllDishes = async () => {
    const response = await getAllDishes()
    if (response.status === 200 ) {
      dispatch(setAllDishes(response.msg))
    }
  }

  const handleAction = async () => {
    const response = await DisheService[`${formType}Dishe`]({
      _id,
      name,
      price,
      preparation,
      preparationTime,
      ingredients,
    })
    if (response.status >= 400 && response.status <= 499) {
      alert.show(response.description, {
        type: 'error'
      })
    }
    if (response.status >= 200 && response.status <= 201) {
      updateAllDishes()
      alert.show(`Disheo ${formType === 'create' ? 'creado' : 'modificado'} exitosamente!`, {
        type: 'success'
      })
      dispatch(setModalCrudVisibility(false))
    }
  }

  return (
      <div className='flex column'>
        <label className='form-label'>Nombre plato</label>
        <input className='form-control' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <label className='form-label'>Precio</label>
        <input className='form-control' type="text" value={price} onChange={(event) => setPrice(event.target.value)} />
        <label className='form-label'>Preparacion</label>
        <input className='form-control' type="text" value={preparation} onChange={(event) => setPreparation(event.target.value)} />
        <label className='form-label'>Tiempo Preparacion</label>
        <input className='form-control' type="text" value={preparationTime} onChange={(event) => setPreparationTime(event.target.value)} />
        <label className='form-label'>Ingredientes</label>
        <input className='form-control' type="text" value={ingredients} onChange={(event) => setIngredients(event.target.value)} />
        <Select
          value={ingredients}
          onChange={setIngredients}
          options={[]}
        />
        
        <button
          className={`btn btn-${formType === 'create' ? 'success' : 'warning'} mt-30`}
          onClick={() => handleAction()}
        >{formType === 'create' ? 'Crear' : 'Editar'}</button>
      </div>
    // </div>
  )
}
