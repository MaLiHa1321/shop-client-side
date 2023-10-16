import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdateShop = () => {
    const loaderData = useLoaderData();
    const {name,quantity,photo,_id} = loaderData;

    const handleUpdate = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;
        const updateProduct = {name,quantity,photo}
        fetch(`http://localhost:5000/shop/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.modifiedCount > 0 ){
                alert('moified successfull')
            }
           
        })
    }

    return (
        <div>
            <h2>Update data for: {loaderData.name}</h2>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleUpdate} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" name='name' defaultValue={loaderData.name} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">quantity</span>
          </label>
          <input type="quantity" placeholder="quantity" name='quantity' defaultValue={loaderData.quantity} className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" placeholder="photo url" name='photo' defaultValue={loaderData.photo} className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Add product</button>
        </div>
      </form>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default UpdateShop;