import React, { useState } from 'react'
import { TableList } from './TableList'
import { useDispatch } from 'react-redux';
import { setFormType, setModalCrudVisibility } from '../../store/slices/tableSlice';
import { TableDialog } from './TableDialog';

export const TableCrud = () => {

  const dispatch = useDispatch()

  const handleShow = () => {
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('create'))
  }

  return (
    <>
      <div className='flex centered mt-30'>
        <div className="flex centered column">
          <h1>Mantenedor de mesas</h1>
          <button
            type="button"
            className='btn btn-primary mt-20'
            onClick={handleShow}>Crear mesa</button>
        </div>
      </div>
      <div className='flex centered mt-30'>
        <div className="flex centered column w-50" style={{'fontSize': '20px', 'color': 'white'}}>
          <TableList/>
        </div>
      </div>
      <TableDialog/>
    </>
  )
}
