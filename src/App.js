import './App.css';
import { useEffect, useState } from 'react';

function App() {
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
    fetch("http://192.168.1.3:8080/api/v1/auth/login", {
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
      })
  }



  return (
    <div className="App">
      <div className='App-header' >
        <div className='row'>
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
      </div>
    </div>
  );
}

export default App;
