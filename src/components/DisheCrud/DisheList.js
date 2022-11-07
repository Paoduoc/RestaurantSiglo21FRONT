import React, { useEffect, useState } from 'react'
import { enableDishe, getAllDishes } from '../../services/disheService'
import Button from 'react-bootstrap/Button';
import Switch from "react-switch";
import { useDispatch, useSelector, } from 'react-redux';
import { setAllDishes, setFormType, setModalCrudVisibility, setSelectedDishe } from '../../store/slices/disheSlice';

export const DisheList = () => {

  const dispatch = useDispatch()

  const { allDishes } = useSelector((state) => state.dishe)

  const handleShow = (selectedDishe) => {
    dispatch(setSelectedDishe(selectedDishe))
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('edit'))
  }

  const handleGetAllDishes = async () => {
    // desde la bodega sacamos los disheos con sus gramos
    const responseDishe = await getAllDishes()
    
    if (responseDishe.status === 200) {
      dispatch(setAllDishes(responseDishe.msg))
    }
  }

  const handleStatusDishe = async (dishe) => {
    const response = await enableDishe({
      status: !dishe.estado,
      _id: dishe._id
    })
    handleGetAllDishes()
    console.log(response)
  }

  useEffect(() => {
    handleGetAllDishes()
  }, [])
  

  return (
    <>
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Preparacion</th>
            <th scope="col">Tiempo Preparacion</th>
            <th scope="col">Ingredientes</th>
            <th scope="col">Editar</th>
            <th scope="col">Activar/Desactivar</th>
          </tr>
        </thead>
        <tbody>
          {
            allDishes.map(d => (
              <tr key={ d._id }>
                <td>{ d.nombrePlato }</td>
                <td>{ d.precio }</td>
                <td>{ d.preparacion }</td>
                <td>{ d.minutosPreparacion }</td>
                <td>
                  {
                    d.ingredientes.length 
                      ? (
                        <ul>
                          {
                            d.ingredientes.map((i, index) => (
                              <li key={`${d._id}${index}`}>{i.nom}: {i.cant}</li>
                            ))
                          }
                        </ul>
                      )
                      : 'Sin ingredientes'
                  }
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(d)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Switch onChange={() => handleStatusDishe(d)} checked={d.estado} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
