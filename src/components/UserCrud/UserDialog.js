import Modal from 'react-bootstrap/Modal';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { resetSelectedUser, setModalCrudVisibility } from '../../store/slices/userSlice'
import { UserForm } from './UserForm'
import { getAllRoles } from '../../services/rolService';

export const UserDialog = () => {
  const dispatch = useDispatch()
  const {
    modalCrudVisibility: show,
    selectedUser,
    formType
  } = useSelector((state) => state.user)

  const [roles, setRoles] = useState([])

  const handleClose = () => {
    dispatch(setModalCrudVisibility(false))
    dispatch(resetSelectedUser())
  }

  const getRoles = async () => {
    const response = await getAllRoles()
    if (response.status === 200) {
      setRoles(response.msg)
    }
  }

  // aqui cargamos los roles
  useEffect(() => {
    getRoles()
  }, [])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{formType === 'create' ? 'Crear' : 'Editar'} Usuario</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UserForm
            {
              ...selectedUser
            }
            rol={selectedUser.rol._id}
            fechaCumpleannos={new Date()}
            formType={formType}
            roles={roles}
          />
        </Modal.Body>
      </Modal>
    </>
  )
}
