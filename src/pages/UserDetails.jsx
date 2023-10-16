import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const loadedData = useLoaderData()
    return (
        <div>
            <h3>{loadedData.length}</h3>
         <div  className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead>
                    <tr>
                      <th></th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* row 1 */}
                    {
                        loadedData.map(user =>  <tr key={user._id}>
                            <th>1</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td> <button className='btn btn-error text-white'>Delete</button> </td>
                            <td> <button className='btn btn-success text-white'>Edit</button> </td>

                          </tr> )
                    }
                  
                  </tbody>
                </table>
              </div>
       
            
        </div>
    );
};

export default UserDetails;