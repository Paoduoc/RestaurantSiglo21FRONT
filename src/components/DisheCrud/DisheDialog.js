import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSelectedDishe, setModalCrudVisibility } from '../../store/slices/disheSlice'
import { DisheForm } from './DisheForm'

export const DisheDialog = () => {
  const dispatch = useDispatch()
  const {
    modalCrudVisibility: show,
    selectedDishe,
    formType
  } = useSelector((state) => state.dishe)

  const handleClose = () => {
    dispatch(setModalCrudVisibility(false))
    dispatch(resetSelectedDishe())
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formType === 'create' ? 'Crear' : 'Editar'} disheo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DisheForm
            {
              ...selectedDishe
            }
            formType={formType}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
