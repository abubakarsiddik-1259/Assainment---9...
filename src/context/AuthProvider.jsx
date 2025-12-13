

import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({children}) => {





    ////////// Signup Fun //////////
    const signupFun= (email, password) =>{

        return  createUserWithEmailAndPassword(auth, email, password);
    }


    const authInfo ={
        signupFun,
    }




    return (
        <div>
           
        </div>
    );
};

export default AuthProvider;