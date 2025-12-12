


import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componnt/Navbar';
import Footer from '../componnt/Footer';
import MyContainer from './../componnt/MyContainer';

const MainlayOut = () => {
    return (

        <div className="bg-gray-600">
            <MyContainer>

        <div className="flex flex-col min-h-screen bg-gray-500">
        <Navbar></Navbar>
       
            <div className="flex-1   max-w-screen-xl ">
                <Outlet></Outlet>
                </div>
      
             <Footer></Footer>
           
           
            </div>
             </MyContainer>
           </div>
    );
};

export default MainlayOut;