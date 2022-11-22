import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSelectedTable, setModalCrudVisibility } from '../../store/slices/tableSlice'
import { TableForm } from './TableForm'

export const TableDialog = () => {
  const dispatch = useDispatch()
  const {
    modalCrudVisibility: show,
    selectedTable,
    formType
  } = useSelector((state) => state.table)

  const handleClose = () => {
    dispatch(setModalCrudVisibility(false))
    dispatch(resetSelectedTable())
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formType === 'create' ? 'Crear' : 'Editar'} mesa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <TableForm
            {
              ...selectedTable
            }
            formType={formType}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
