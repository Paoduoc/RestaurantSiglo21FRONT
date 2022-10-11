import React, { useState } from 'react'
import { DisheList } from './DisheList'
import { useDispatch } from 'react-redux';
import { setFormType, setModalCrudVisibility } from '../../store/slices/disheSlice';
import { DisheDialog } from './DisheDialog';

export const DisheCrud = () => {

  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('create'))
  }

  return (
    <>
      <div className='flex centered mt-30'>
        <div className="flex centered column">
          <h1>Mantenedor de platos</h1>
          <button
            type="button"
            className='btn btn-primary mt-20'
            onClick={handleShow}>Crear plato</button>
        </div>
      </div>
      <div className='flex centered mt-30'>
        <div className="flex centered column w-50" style={{'fontSize': '20px', 'color': 'white'}}>
          <DisheList/>
        </div>
      </div>
      <DisheDialog/>
    </>
  )
}
