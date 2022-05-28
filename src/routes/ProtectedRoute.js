import React, { useEffect, useState } from 'react'
import { Loader } from '../components/Loader/Loader';
import { useNavigate } from 'react-router-dom';
import Layouts from '../conatainers/Layouts';
import { useDispatch, useSelector } from 'react-redux';
import { getTokenDetails } from '../store/adminauth';
//import { setUserDetails, removeUserDetails } from '../store/userDetails';

export const ProtectedRoute = (props) => {

  const selector = useSelector(state => state.adminauth);
  const {userInfo} = selector;
 
  // console.log(TokenData);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const [isLoader, setIsLoader] = useState(true);
  const [auth, setAuth] = useState(false)
  let token_ = localStorage.getItem('token');
  //console.log(token_);
  
  useEffect(() => {
  dispatch(getTokenDetails({
          token: token_
        }));
   }, [])

   useEffect(() => {
    if(userInfo && token_){
      //console.log(userInfo);
      if(userInfo.status === 'Token is Expired'){
        localStorage.removeItem('token');
      }
      if(userInfo.status === 'Token is Invalid'){
        localStorage.removeItem('token');
      }
      localStorage.setItem('userId', userInfo.user?.id)
         setIsLoader(false);
         setAuth(true);
         return
       }else{
        // alert('gi');
         setAuth(false);
         setIsLoader(false);
        navigate('/login')
       
       }
     }, [userInfo,token_])

  return (
    <>
    {
      isLoader && <Layouts><div class="d-flex justify-content-center"><Loader/></div></Layouts>
    }

    {
      auth && props.children
    }
    </>
  )
}

