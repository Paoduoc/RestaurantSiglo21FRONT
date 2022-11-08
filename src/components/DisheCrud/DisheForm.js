import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'

import "react-datepicker/dist/react-datepicker.css";
import DisheService, { getAllDishes } from '../../services/disheService'
import { useDispatch } from 'react-redux';
import { setAllDishes, setModalCrudVisibility } from '../../store/slices/disheSlice'
import Select from 'react-select';
import Creatable, { useCreatable } from 'react-select/creatable'

export const DisheForm = ({
  _id,
  nombrePlato,
  precio,
  preparacion,
  minutosPreparacion,
  ingredientes,
  descripcion,
  categoria,
  imagen,
  formType
}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [name, setName] = useState(nombrePlato)
  const [price, setPrice] = useState(precio)
  const [preparation, setPreparation] = useState(preparacion)
  const [preparationTime, setPreparationTime] = useState(minutosPreparacion)
  const [ingredients, setIngredients] = useState(ingredientes.map(i => ({value: i.nom, label: i.nom})))
  const [description, setDescription] = useState(descripcion)
  const [category, setCategory] = useState(categoria)
  const [image, setImage] = useState(imagen)
  const [ammounts, setAmmounts] = useState(ingredientes.map(i => i.cant))

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
      description,
      category,
      image,
      ingredients: ingredients.map((i, index) => {
        return {
          nom: i.value,
          cant: ammounts[index]
        }
      }),
    })
    if (response.status >= 400 && response.status <= 499) {
      alert.show(response.description, {
        type: 'error'
      })
    }
    if (response.status >= 200 && response.status <= 201) {
      updateAllDishes()
      alert.show(`Plato ${formType === 'create' ? 'creado' : 'modificado'} exitosamente!`, {
        type: 'success'
      })
      dispatch(setModalCrudVisibility(false))
    }
  }

  const handleChangeIngredients = (newValue, action) => {
    if (action.action === 'remove-value') {
      // buscamos el indice del ingrediente
      const indexOfRemovedValue = ingredients.findIndex(obj => obj.value === action.removedValue.value)
      // para luego eliminarlo del arreglo de cantidades
      if (indexOfRemovedValue > -1) {
        setAmmounts(ammounts => {
          const data = [...ammounts]
          data.splice(indexOfRemovedValue, 1)
          return data
        })
      }
    } else if (action.action === 'create-option') {
      setAmmounts(ammounts => {
        const data = [...ammounts]
        data.push('')
        return data
      })
    }
    setIngredients(newValue)
    
  }

  const handleAmmountChange = (index, event) => {
    setAmmounts(ammounts => {
      const data = [...ammounts]
      data[index] = event.target.value ? parseInt(event.target.value) : ''
      return data
    });
  }

  return (
      <div className='flex column'>
        <label className='form-label'>Nombre plato</label>
        <input className='form-control' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <label className='form-label'>Descripcion</label>
        <input className='form-control' type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
        <label className='form-label'>Categoria</label>
        <input className='form-control' type="text" value={category} onChange={(event) => setCategory(event.target.value)} />
        <label className='form-label'>Precio</label>
        <input className='form-control' type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
        <label className='form-label'>Preparacion</label>
        <input className='form-control' type="text" value={preparation} onChange={(event) => setPreparation(event.target.value)} />
        <label className='form-label'>Tiempo Preparacion</label>
        <input className='form-control' type="text" value={preparationTime} onChange={(event) => setPreparationTime(event.target.value)} />
        <label className='form-label'>Url Imagen</label>
        <input className='form-control' type="text" value={image} onChange={(event) => setImage(event.target.value)} />
        <label className='form-label'>Ingredientes</label>
        <Creatable
          value={ingredients}
          onChange={handleChangeIngredients}
          options={[]}
          isMulti={true}
        />
        <label className='form-label'>Cantidades</label>
        
        {
          ammounts.map((i, index) => {
            return (
              <div key={index}>
                <label className='form-label'>{ingredients[index].value}</label>
                <input
                  className='form-control'
                  type='number'
                  value={i}
                  onChange={(event) => handleAmmountChange(index, event)}
                />
              </div>
            )
          })
        }
        
        <button
          className={`btn btn-${formType === 'create' ? 'success' : 'warning'} mt-30`}
          onClick={() => handleAction()}
        >{formType === 'create' ? 'Crear' : 'Editar'}</button>
      </div>
    // </div>
  )
}
