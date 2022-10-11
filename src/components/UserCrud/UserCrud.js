import React, { useState } from 'react'
import { UserList } from './UserList'
import { useDispatch } from 'react-redux';
import { setFormType, setModalCrudVisibility } from '../../store/slices/userSlice';
import { UserDialog } from './UserDialog';

export const UserCrud = () => {

  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('create'))
  }

  return (
    <>
      <div className='flex centered mt-30'>
        <div className="flex centered column">
          <h1>Mantenedor de usuario</h1>
          <button
            type="button"
            className='btn btn-primary mt-20'
            onClick={handleShow}>Crear usuario</button>
        </div>
      </div>
      <div className='flex centered mt-30'>
        <div className="flex centered column w-50" style={{'fontSize': '20px', 'color': 'white'}}>
          <UserList/>
        </div>
      </div>
      <UserDialog/>
    </>
  )
}
