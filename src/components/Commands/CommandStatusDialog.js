import React, { useEffect, useState } from 'react'
import { useAlert } from 'react-alert'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { setModalOpen, resetSelectedCommand, setAllCommands } from '../../store/slices/commandSlice';
import { saveCommandStatus } from '../../services/commandService'
import { getAllCommands } from '../../services/commandService'
import { getDishe } from '../../services/disheService'


export const CommandStatusDialog = ({options}) => {
  const dispatch = useDispatch()
  const alert = useAlert()

  const [selectedState, setSelectedState] = useState('')

  const { modal, selectedCommand } = useSelector((state) => state.command)

  useEffect(() => {
    setSelectedState(options.includes(selectedCommand.estadoPedido) ? selectedCommand.estadoPedido : '')
  }, [options, selectedCommand])

  const handleClose = () => {
    dispatch(setModalOpen(false))
    dispatch(resetSelectedCommand())
  }

  const handleSetSelectedState = (event) => {
    setSelectedState(event.target.value)
  }

  const handleSaveCommandStatus = async () => {
    if (selectedState === '') {
      alert.show(`Debes seleccionar una opcion`, {
        type: 'error'
      })
      return 
    }
    const response = await saveCommandStatus({
      _id: selectedCommand.pedidoId,
      status: selectedState
    })
    console.log(response)
    if (response.status >= 200 && response.status < 300) {
      handleGetAllCommands()
      handleClose()
      alert.show(`Comanda actualizada exitosamente!`, {
        type: 'success'
      })

    }
  }
  
  const handleGetAllCommands = async () => {
    const response = await getAllCommands()
    if (response.status === 200) {
      for (let i = 0; i < response.msg.length; i++) {
        response.msg[i].plato = await handleGetDishe(response.msg[i])
      }
      dispatch(setAllCommands(response.msg))
    }
  }

  const handleGetDishe = async (order) => {
    if (!order.plato) return
    const response = await getDishe(order.plato._id)
    if (response.status === 200) {
      return response.msg
    }
  }

  return (
    <Modal show={modal.isOpen} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cambiar el estado del pedido</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Select
          value={selectedState}
          onChange={handleSetSelectedState}
        >
          <option>Seleccione una opcion</option>
          {
            options.map(state => (
              <option key={state}>{state}</option>
            ))
          }
        </Form.Select>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='success'
          onClick={handleSaveCommandStatus}
        >
          Guardar
        </Button>
      </Modal.Footer>

    </Modal>
  )
}
