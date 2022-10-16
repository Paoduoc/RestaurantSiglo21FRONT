import React, { useEffect, useState } from 'react'
import { enableTable, getAllTables } from '../../services/tableService'
import Button from 'react-bootstrap/Button';
import Switch from "react-switch";
import { useDispatch, useSelector, } from 'react-redux';
import { setAllTables, setFormType, setModalCrudVisibility, setSelectedTable } from '../../store/slices/tableSlice';

export const TableList = () => {

  const dispatch = useDispatch()

  const { allTables } = useSelector((state) => state.table)

  const handleShow = (selectedTable) => {
    dispatch(setSelectedTable(selectedTable))
    dispatch(setModalCrudVisibility(true))
    dispatch(setFormType('edit'))
  }

  const handleGetAllTables = async () => {
    // desde la bodega sacamos los tableos con sus gramos
    const responseTable = await getAllTables()
    
    if (responseTable.status === 200) {
      dispatch(setAllTables(responseTable.msg))
    }
  }

  const handleStatusTable = async (table) => {
    const response = await enableTable({
      status: !table.estado,
      _id: table._id
    })
    handleGetAllTables()
    console.log(response)
  }

  useEffect(() => {
    handleGetAllTables()
  }, [])
  

  return (
    <>
      <table className="table table-primary table-striped">
        <thead>
          <tr>
            <th scope="col">Mesa Numero</th>
            <th scope="col">Cantidad Sillas</th>
            <th scope="col">Editar</th>
            <th scope="col">Activar/Desactivar</th>
          </tr>
        </thead>
        <tbody>
          {
            allTables.map(t => (
              <tr key={ t._id }>
                <td>{ t.numMesa }</td>
                <td>{ t.cantSillas }</td>
                <td>
                  <Button variant="primary" onClick={() => handleShow(t)}>
                    Editar
                  </Button>
                </td>
                <td>
                  <Switch onChange={() => handleStatusTable(t)} checked={t.estado} />
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
