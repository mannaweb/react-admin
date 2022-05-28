import React, { Component ,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../store/adminauth';
import toastr from 'toastr';
import { useDispatch, useSelector } from 'react-redux';

export const Login = () => {

    const dispatch = useDispatch();
    let navigate = useNavigate();
    const {loginData,loadLogin} = useSelector(state => state.adminauth);
  const [loginDetails, setLogin] = useState({
    username: '',
    email: '',
    password: ''  
});
const [status, setStatus] = useState(false);


  const inputChange = (e) => {
    setLogin({
        ...loginDetails, [e.target.name]: e.target.value
    })
};

const loginSubmit = ()=>{
    dispatch(loginUser(loginDetails));
};
console.log(loginData);
useEffect(()=>{
    if(loginData.success === true){
        toastr.success('Successfully logged in');
        localStorage.setItem('token', loginData.token);
         if(loginData.token){
              navigate('/dashboard')
          }
        //alert(JSON.parse(token).access);
        
    }else if(loginData.success === false){
        toastr.error(loginData.message);
    }else if(loginData.error){
        loginData.error?.password && toastr.error(loginData.error?.password[0]);
        loginData.error?.email &&  toastr.error(loginData.error?.email[0]);
       
    }
  
  }, [loginData])



  return (
        <> 
           <div className="container">


<div className="row justify-content-center">

    <div className="col-xl-10 col-lg-12 col-md-9">

        <div className="card o-hidden border-0 shadow-lg my-5">
            <div className="card-body p-0">
               
                <div className="row">
                    <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div className="col-lg-6">
                        <div className="p-5">
                            <div className="text-center">
                                <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form className="user">
                                <div className="form-group">
                                    <input type="email" className="form-control form-control-user"
                                        id="exampleInputEmail" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..." name="email" value={loginDetails.email} onChange={inputChange}/>
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control form-control-user"
                                        id="exampleInputPassword" name="password" placeholder="Password" value={loginDetails.password} onChange={inputChange}/>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox small">
                                        <input type="checkbox" className="custom-control-input" id="customCheck"/>
                                        <label className="custom-control-label" htmlFor="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                                {loadLogin &&  <a  className="btn btn-primary btn-user btn-block">
                                Logged In..
                                </a>}
                                {!loadLogin &&  <a onClick={loginSubmit} className="btn btn-primary btn-user btn-block">
                                    Login
                                </a>}
                               
                              
                            </form>
                            <hr/>
                            <div className="text-center">
                                <a className="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div className="text-center">
                                <a className="small" href="register.html">Create an Account!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>

</div>
    </>
  )
}
