import React, { useContext, useState, } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
    const [show, setShow] = useState(false);


const {user, setUser, updateProfileFunction, setLoading} = useContext(AuthContext)


    const handleUpdate = (e) =>{
          e.preventDefault();
    const displayName = e.target.name?.value;
    const photoURL = e.target.photo?.value;

          updateProfileFunction(
                 displayName,
                 photoURL,
               ) .then((res) => {
                 setUser({...user, displayName:displayName, photoURL:photoURL})
               console.log(res);
            
               setLoading(false)             
               toast.success("Profile update successfull");
             })
             .catch((e) => {
               toast.error(e.message);
             });
       
    }
    
    return (
        <div className=' bg-cyan-500  '>

         <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80">

        <h2 className="text-xl font-semibold mb-4">My Profile</h2>

        <img
          src={user?.photoURL}
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />

        <p className="font-medium">{user?.displayName}</p>
        <h2 className=" text-center">{user?.email}</h2>

        <button
          onClick={() => setShow(true)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Update Profile
        </button>

        {show && (

          <div className="mt-4">
            <form onSubmit={handleUpdate}>
            <input
              type="text"
              placeholder="New Name"
              name='name'
              className="w-full border px-2 py-1 rounded mb-2"
            />

            <input
              type="text"
              placeholder="Image URL"
              name='photo'
              className="w-full border px-2 py-1 rounded mb-2"
            />

            <button
              
              className="w-full bg-green-500 text-white py-1 rounded"
            >
              Save
            </button>
            </form>
          </div>
        )}

      </div>
    </div>
        </div>
    );
};

export default Profile;