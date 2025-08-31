import React, { useEffect, useState } from 'react'
import { useAppSelector } from '../Redux/Hooks/hooks'
import useNavigationHook from '../Redux/Hooks/navigationHook';
import { KeyMapper } from '../KeyMapper/KeyMapper';

const ProtectedRoute = ({children} : {children: React.ReactNode}) => {

 const [isAuthChecked, setIsAuthChecked] = useState(false);
 const {isAuthenticated} = useAppSelector((state)=>state.AuthSlice);
 const {replace} = useNavigationHook();

  useEffect(()=>{
    if(!isAuthenticated){
        replace(KeyMapper.Pages.Auth);
    }
    if(isAuthenticated){
        setIsAuthChecked(true);
    }
  },[isAuthenticated])

  if (!isAuthChecked) return null;
  return (
    (isAuthenticated) && <>{children}</>
  )
}

export default ProtectedRoute