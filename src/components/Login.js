import '../App.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSetUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleSetPassword = (event) => {
    setPassword(event.target.value)
  }

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/v1/users")
  //     .then(response => response.json())
  //     .then(response => {
  //       setTotalUsers(response.msg.length)
  //     })
  // })
  
  const login = () => {
    
    fetch("http://localhost:8080/api/v1/auth/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        correo: username,
        contrasenna: password
      })
    }).then(response => response.json())
      .then(response => {
        console.log(response)
        if (response.status === 200) {
          navigate("/internal-menu")
        }
      })
  }



  return (
    <div className='row align-items-center'>
      <div className='col col-4'>
      </div>
      <div className='col col-4'>
        <h1>Iniciar sesión</h1>
        <label className='form-label'>Correo</label>
        <input className='form-control' type="text" value={username} onChange={handleSetUsername} />

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
