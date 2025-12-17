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
        <div className='   '>

         <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 via-indigo-500 to-purple-600">
      <div className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-pink-400 p-6 rounded-lg shadow-md text-center w-80">

        <h2 className="text-xl font-semibold mb-4">My Profile</h2>

        <img
          src={user?.photoURL}
          className="w-20 h-20 rounded-full mx-auto mb-2"
        />

        <p className="font-medium">{user?.displayName}</p>
        <h2 className=" text-center text-gray-800">{user?.email}</h2>

        <button
          onClick={() => setShow(true)}
          className="btn btn-primary bg-pink-500 border-0 w-full mt-5"
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
              
              className="btn btn-primary bg-cyan-700 border-0 w-full"
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