import React, { useEffect, useState } from 'react'
import { enableUser, getAllUsers } from '../../services/userService'
import Button from 'react-bootstrap/Button';
import Switch from "react-switch";
import { useDispatch, useSelector, } from 'react-redux';
import { setAllUsers, setFormType, setModalCrudVisibility, setSelectedUser } from '../../store/slices/userSlice';

export const UserList = () => {

  const dispatch = useDispatch()

  const { allUsers } = useSelector((state) => state.user)

  const handleShow = (selectedUser) => {
    dispatch(setSelectedUser(selectedUser))
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('edit'))
  }

  const handleGetAllUsers = async () => {
    const response = await getAllUsers()
    if (response.status === 200) {
      dispatch(setAllUsers(response.msg))
    }
  }

  const handleStatusUser = async (user) => {
    const response = await enableUser({
      status: !user.estatus,
      _id: user._id
    })
    handleGetAllUsers()
    console.log(response)
  }

  useEffect(() => {
    handleGetAllUsers()
  }, [])
  

  return (
    <>
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">Rut</th>
            <th scope="col">Correo</th>
            <th scope="col">Editar</th>
            <th scope="col">Activar/Desactivar</th>
          </tr>
        </thead>
        <tbody>
          {
            allUsers.map(u => (
              <tr key={ u._id }>
                <td>{ u.nombre }</td>
                <td>{ u.apellido }</td>
                <td>{ u.rut }</td>
                <td>{ u.correo }</td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(u)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Switch onChange={() => handleStatusUser(u)} checked={u.estatus} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
