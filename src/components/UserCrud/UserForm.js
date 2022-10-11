import React, { useState, useEffect } from 'react'
import DatePicker from "react-datepicker";
import { useAlert } from 'react-alert'

import "react-datepicker/dist/react-datepicker.css";
import UserService, { getAllUsers } from '../../services/userService'
import { useDispatch } from 'react-redux';
import { setAllUsers, setModalCrudVisibility } from '../../store/slices/userSlice';

export const UserForm = ({
  _id,
  nombre,
  apellido,
  rut,
  correo,
  celular,
  fechaCumpleannos,
  rol,
  genero,
  formType,
  roles
}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [name, setName] = useState(nombre)
  const [lastName, setLastName] = useState(apellido)
  const [rutId, setRutId] = useState(rut)
  const [pw, setPw] = useState('')
  const [email, setEmail] = useState(correo)
  const [phone, setPhone] = useState(celular)
  const [birthdate, setBirthdate] = useState(new Date(fechaCumpleannos))
  const [gender, setGender] = useState(genero)
  const [roll, setRoll] = useState(rol)

  const handleSetRoll = (event) => {
    setRoll(event.target.value)
  }

  const updateAllUsers = async () => {
    const response = await getAllUsers()
    if (response.status === 200) {
      dispatch(setAllUsers(response.msg))
    }
  }

  const handleAction = async () => {
    console.log(formType)
    const response = await UserService[`${formType}User`]({
      _id,
      name,
      lastName,
      rut: rutId,
      pw,
      email,
      phone,
      birthdate,
      rol: roll,
      gender,
    })
    console.log(response)
    if (response.status >= 400 && response.status <= 499) {
      alert.show(response.description, {
        type: 'error'
      })
    }
    if (response.status >= 200 && response.status <= 201) {
      updateAllUsers()
      alert.show(`Usuario ${formType === 'create' ? 'creado' : 'modificado'} exitosamente!`, {
        type: 'success'
      })
      dispatch(setModalCrudVisibility(false))
    }
  }

  return (
    // <div className='flex centered'>
      <div className='flex column'>
        <label className='form-label'>Nombre</label>
        <input className='form-control' type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <label className='form-label'>Apellido</label>
        <input className='form-control' type="text" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        <label className='form-label'>Rut</label>
        <input className='form-control' type="text" value={rutId} onChange={(event) => setRutId(event.target.value)} />
        <label className='form-label'>Contraseña</label>
        <input className='form-control' type="password" value={pw} onChange={(event) => setPw(event.target.value)} />
        <label className='form-label'>Correo</label>
        <input className='form-control' type="text" value={email} onChange={(event) => setEmail(event.target.value)} />
        <label className='form-label'>Celular</label>
        <input className='form-control' type="text" value={phone} onChange={(event) => setPhone(event.target.value)} />
        <label className='form-label'>Fecha de nacimiento</label>
        <DatePicker selected={birthdate} onChange={(date) => setBirthdate(date)} />
        <label className='form-label'>Genero</label>
        <select className="form-select" value={gender} onChange={(event) => setGender(event.target.value)}>
          <option value="Masculino">Masculino</option>
          <option value="Femenino">Femenino</option>
        </select>
        <label className='form-label'>Rol</label>
        <select className="form-select" value={roll} onChange={handleSetRoll}>
        <option defaultValue="">Seleccione un rol</option>
          {
            roles.map(r => (
              <option value={ r._id } key={r._id}>{ r.nombre }</option>
            ))
          }
        </select>
        <button
          className={`btn btn-${formType === 'create' ? 'success' : 'warning'} mt-30`}
          onClick={() => handleAction()}
        >{formType === 'create' ? 'Crear' : 'Editar'}</button>
      </div>
    // </div>
  )
}
