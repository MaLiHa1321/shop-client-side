import React from 'react';

const Addshop = () => {

    const handleProduct = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const photo = form.photo.value;

        const newProduct ={name,quantity,photo}
        console.log(newProduct)
        fetch('http://localhost:5000/shop',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                alert('product added successful')
                form.reset()
            }
        })
    }
    return (
        <div>
            <h3>Add product</h3>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
 
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleProduct} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" placeholder="name" name='name' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">quantity</span>
          </label>
          <input type="quantity" placeholder="quantity" name='quantity' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo url</span>
          </label>
          <input type="text" placeholder="photo url" name='photo' className="input input-bordered" required />
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

export default Addshop;