import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { setUser, setToken } from '../store/slices/userSlice';

function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [email, setEmail] = useState("pruebalogin@gmail.com")
  const [password, setPassword] = useState("1234")

  const handleSetEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleSetPassword = (event) => {
    setPassword(event.target.value)
  }
  
  const login = () => {
    fetch("http://localhost:8080/api/v1/auth/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: email,
        contrasenna: password
      })
    }).then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          dispatch(setUser(response.msg.usuario))
          dispatch(setToken(response.msg.token))
          navigate("/internal-menu")
        }
      })
  }

  return (
    <div className='flex centered mt-30'>
      <div className='flex column centered w-25'>
        <div className='flex centered'>
          <h1>Iniciar sesión</h1>
        </div>
        <label className='form-label'>Correo({email})</label>
        <input className='form-control' type="text" value={email} onChange={handleSetEmail} />

        <label className='form-label'>Contraseña</label>
        <input className='form-control' type="password" value={password} onChange={handleSetPassword} />

        <button className='btn btn-success mt-3' onClick={() => login()}>
          Acceder
        </button>
      </div>
    </div>
  );
}

export default Login;
