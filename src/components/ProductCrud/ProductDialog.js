import Modal from 'react-bootstrap/Modal';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSelectedProduct, setModalCrudVisibility } from '../../store/slices/productSlice'
import { ProductForm } from './ProductForm'

export const ProductDialog = () => {
  const dispatch = useDispatch()
  const {
    modalCrudVisibility: show,
    selectedProduct,
    formType
  } = useSelector((state) => state.product)

  const handleClose = () => {
    dispatch(setModalCrudVisibility(false))
    dispatch(resetSelectedProduct())
  }

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formType === 'create' ? 'Crear' : 'Editar'} producto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm
            {
              ...selectedProduct
            }
            formType={formType}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
