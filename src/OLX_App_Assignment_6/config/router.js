import React from 'react';
import Sign_Up from '../Screens/Sign_Up/Sign_Up'
import Sign_In from '../Screens/Sign_In/Sign_In';
import { useEffect, useState } from 'react';

import Dashboard from '../Screens/Dashboard/Dashboard'

import CreateAd from '../Screens/AdPost/CreateAd'

import ErrorPage from '../Screens/Error/Error'

import LoginUserProfile from '../Screens/loginUserProfile/loginUserProfile'

import LoginUserAds from '../Screens/loginUserAds/LoginUserAds'
import AdDetail from '../Screens/AdDetail/AdDetail';
import FavouriteAds from '../Screens/favouriteAds/FavouriteAds';

import { onAuthStateChanged } from 'firebase/auth';
import { auth,getUserData } from './firebase';
import { Routes, Route, useNavigate, Navigate, BrowserRouter } from 'react-router-dom';



const Router = () => {
    const [user, setUser] = useState();

    //const navigate = useNavigate();
  
  //components like dashboard createAd myProfile
  
  const protectedRoute = (component)=>{
  if(user){
    
    
    return component;
  }
  else{
    return <Navigate to={"/login"} replace/>;
  }
  
  }
  
  
  //component login signup
  
  const protectedRouteAuth = (component)=>{
    if(!user){
      ///console.log(user);
      return component;
      
    }
    else{
      //console.log('user',user);
      return <Navigate to={"/dashboard"} replace/>
  
    }
  
  
  };
  
  useEffect(()=>{
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        
        //console.log(user);
        ///const response = await getUserData();
        setUser(user);
      }
      else
      {
        setUser(false);
        console.log('no user found');
        
      }
    })
  },[]);
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={protectedRouteAuth(<Sign_In />)} />
                <Route path='/signup' element={protectedRouteAuth(<Sign_Up />)} />
                <Route path='/dashboard' element={protectedRoute(<Dashboard />)} />
                <Route path='/dashboard/createAd' element={protectedRoute(<CreateAd />)} />
                <Route path='/dashboard/editProfile' element={protectedRoute(<LoginUserProfile />)} />
                <Route path='/dashboard/userAds' element={protectedRoute(<LoginUserAds />)} />
                <Route path='/dashboard/adDetails/:Id' element={<AdDetail />} />
                <Route path='/dashboard/favouriteAds' element={<FavouriteAds />} />

                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>

        </>
    )
}

export default Router;