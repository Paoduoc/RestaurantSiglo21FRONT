import { useEffect, useState } from "react"
import { getAllVaults } from "../../services/vaultService"
import './Vault.css'

export const Vault = () => {
  const [allProducts, setAllProducts] = useState([])
  const handleGetAllVaults = async () => {
    const response = await getAllVaults()
    setAllProducts(response.msg)
  }
  useEffect(() => {
    handleGetAllVaults()
  
  }, [])
  
  return (
    <div className="container">
    <table className="table table-primary table-striped">
      <thead>
        <tr>
          <th scope="col">Nombre producto</th>
          <th scope="col">Cantidad</th>
          <th scope="col">Cantidad min</th>
          <th scope="col">Estado</th>
        </tr>
      </thead>
      <tbody>
        {
          allProducts.map((p, index) => (
            <tr key={ index }>
              <td>{ p.nombreProducto }</td>
              <td>{ p.gramos }</td>
              <td>{ p.cantidadMin }</td>
              <td>{ p.estado ? 'Activo' : 'Inactivo' }</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    </div>
  )

}
