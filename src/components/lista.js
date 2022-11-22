import React from 'react'

import './lista.css'

const Lista = (props) => {
  return (
    <div className="lista-container">
      <select className="lista-select">
        <option value="Option 1">1</option>
        <option value="Option 2">2</option>
        <option value="Option 3">3</option>
        <option value="Option 4">4</option>
        <option value="Option 5">5</option>
        <option value="Option 6">6</option>
      </select>
    </div>
  )
}

export default Lista
