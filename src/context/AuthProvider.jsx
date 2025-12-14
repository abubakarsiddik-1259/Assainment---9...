

import { createUserWithEmailAndPassword, GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useState } from 'react';



const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)




    ////////// Signup Fun //////////
    const signupFun = (email, password) =>{

        return  createUserWithEmailAndPassword(auth, email, password);
    }

/////////// Signin ///////////////

const signinFuntion = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}

///////// Google Loging //////
const googleLogin = () =>{
    return  signInWithPopup(auth, GoogleProvider)
}


////////// Signin  Out ///////////
const  signOutFuntion = () =>{
    return   signOut(auth)
}


///////// Forget  Password ////////
const forgetPassFunction = (email) =>{
    return sendPasswordResetEmail(auth, email)
}

const updateProfileFunction = (displayName,photoURL) => {

    return  updateProfile(auth.currentUser, {
              displayName,
              photoURL,
            })
}








    const authInfo ={
        signupFun,
        signinFuntion,
       googleLogin,
       signOutFuntion,
       forgetPassFunction,
       user,
        setUser,
        updateProfileFunction
    }




    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;