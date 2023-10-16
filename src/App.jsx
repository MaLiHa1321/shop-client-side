
import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { useState } from 'react'

function App() {

  const loadedData = useLoaderData()
  const [products,setProduct] = useState(loadedData)

  const handleDelete = id =>{
   fetch(`http://localhost:5000/shop/${id}`,{
    method: 'DELETE'
   })
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    if(data.deletedCount > 0){
      alert("product is delete successfully")
      const remaing = products.filter(product => product._id !== id)
      setProduct(remaing)

    }
   })
  }


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
            <button onClick={() => handleDelete(product._id)} className="btn btn-primary">Delete</button>
            <Link to={`/updateshop/${product._id}`}>
            <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>)
      }
    
    </>
  )
}

export default App
