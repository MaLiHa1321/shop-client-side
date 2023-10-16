
import { useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {

  const loadedData = useLoaderData()
  const [products,setProduct] = useState(loadedData)


  return (
    <>
     
      <h1>Products : {products.length}</h1>
      {
        products.map(product => <div className="card w-96 bg-base-100 shadow-xl" key={product._id}>
        <figure><img src={product.photo} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{product.name}</h2>
          <p>{product.quantity}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>)
      }
    
    </>
  )
}

export default App
