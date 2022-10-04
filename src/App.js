import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState("")
  const [totalUsers, setTotalUsers] = useState(0)
  const [password, setPassword] = useState("")

  const handleSetUsername = (event) => {
    setUsername(event.target.value)
  }
  const handleSetPassword = (event) => {
    setPassword(event.target.value)
  }

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/users")
      .then(response => response.json())
      .then(response => {
        setTotalUsers(response.msg.length)
      })
  })
  
  const login = () => {
    fetch("", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
    })  
  }



  return (
    <div className="App">
      <header className="App-header">
        <label>Total usuarios {totalUsers}</label>
        <label>Username ({})</label>
        <input type="text" value={username} onChange={handleSetUsername} />

        <label>Password ({password})</label>
        <input type="password" value={password} onChange={handleSetPassword} />
      </header>
    </div>
  );
}

export default App;
