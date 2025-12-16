

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect,  } from 'react';
import { auth } from '../firebase/firebase.config';
import { AuthContext } from './AuthContext';
import { useState } from 'react';



const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
const [user, setUser] = useState(null)
const [loading, setLoading] = useState(true)
const [femail, setFemail] = useState(true)




    ////////// Signup Fun //////////
    const signupFun = (email, password) =>{
        setLoading(true)
        return  createUserWithEmailAndPassword(auth, email, password);
    }

/////////// Signin ///////////////

const signinFuntion = (email, password) =>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
}

///////// Google Loging //////
const googleLogin = () =>{
      setLoading(true)
    return  signInWithPopup(auth, GoogleProvider)
}


////////// Signin  Out ///////////
const  signOutFuntion = () =>{
     setLoading(true)
    return   signOut(auth)
}


///////// Forget  Password ////////
const forgetPassFunction = (email) =>{
     setLoading(true)
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
        updateProfileFunction,
        loading, 
        setLoading,
       setFemail,
       femail
    }



useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
    setUser(currUser)
    setLoading(false)
})

return () =>{
    unsubscribe
}
},[])





    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;