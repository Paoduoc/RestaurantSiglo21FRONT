import React from 'react'

import './Reporteria.css'

const Reporteria = (props) => {
  return (
    <div className="reporteria-container">
      <div className="reporteria-container01">
        <h1 className="reporteria-text">Reporteria</h1>
        <div className="reporteria-container02">
          <div className="reporteria-container03">
            <div className="reporteria-container04">
              <div className="reporteria-container05"> 
              <input type="date" id="start" name="trip-start"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31"></input>
               </div>
            </div>
          </div>
          <div className="reporteria-container06">
            <div className="reporteria-container07">
            <input type="date" id="start" name="trip-start"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31"></input>
            </div>
          </div>
        </div>
        <span className="reporteria-text1">Total de Boletas Emitidas</span>
        <span className="reporteria-text2">Clientes Atendidos</span>
        <div className="reporteria-container08">
          <div className="reporteria-container09">
            <div className="reporteria-container10">
            <input type="date" id="start" name="trip-start"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31"></input>
            </div>
          </div>
          <div className="reporteria-container11">
            <div className="reporteria-container12">
            <input type="date" id="start" name="trip-start"
               value="2018-07-22"
               min="2018-01-01" max="2018-12-31"></input>
            </div>
          </div>
        </div>
        <span className="reporteria-text3">Tiempo de Atención Promedio</span>
        <span className="reporteria-text4">Platos Consumidos</span>
      </div>
    </div>
  )
}

export default Reporteria
