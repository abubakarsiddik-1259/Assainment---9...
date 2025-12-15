import React, { use } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate, useLocation } from 'react-router';
import { HashLoader } from 'react-spinners';

const PrivateRoute = ({children}) => {
    
    
    const {user, loading } = use(AuthContext);


    const location = useLocation();



    if(loading) {
        return <HashLoader />
    }


    if(!user){
        return <Navigate to='/signin' state={location.pathname}></Navigate>
    }
    
    
    
    
    
    
    
    
    
    
    
    return children
};

export default PrivateRoute;