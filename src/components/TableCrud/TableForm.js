import React, { useState, useEffect } from 'react'
import { useAlert } from 'react-alert'

import "react-datepicker/dist/react-datepicker.css";
import TableService, { getAllTables } from '../../services/tableService'
import { useDispatch } from 'react-redux';
import { setAllTables, setModalCrudVisibility } from '../../store/slices/tableSlice'

export const TableForm = ({
  _id,
  numMesa,
  cantSillas,
  formType
}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [tableNumber, setTableNumber] = useState(numMesa)
  const [shairAmmount, setShairAmmount] = useState(cantSillas)

  const updateAllTables = async () => {
    const response = await getAllTables()
    if (response.status === 200 ) {
      dispatch(setAllTables(response.msg))
    }
  }

  const handleAction = async () => {
    const response = await TableService[`${formType}Table`]({
      _id,
      tableNumber,
      shairAmmount,
    })
    if (response.status >= 400 && response.status <= 499) {
      alert.show(response.description, {
        type: 'error'
      })
    }
    if (response.status >= 200 && response.status <= 201) {
      updateAllTables()
      alert.show(`Mesa ${formType === 'create' ? 'creado' : 'modificada'} exitosamente!`, {
        type: 'success'
      })
      dispatch(setModalCrudVisibility(false))
    }
  }

  return (
      <div className='flex column'>
        <label className='form-label'>Mesa Numero</label>
        <input className='form-control' type="text" value={tableNumber} onChange={(event) => setTableNumber(event.target.value)} />
        <label className='form-label'>Cantidad Sillas</label>
        <input className='form-control' type="text" value={shairAmmount} onChange={(event) => setShairAmmount(event.target.value)} />
        
        <button
          className={`btn btn-${formType === 'create' ? 'success' : 'warning'} mt-30`}
          onClick={() => handleAction()}
        >{formType === 'create' ? 'Crear' : 'Editar'}</button>
      </div>
    // </div>
  )
}
