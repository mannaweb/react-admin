import React from 'react'
import { useDispatch } from 'react-redux';
import { logoutUser } from '../store/adminauth';
export default function LogoutModal() {
   const dispatch = useDispatch();
   let token = localStorage.getItem('token');
   
    const Logout = ()=>{
        dispatch(logoutUser({token:token}));
        window.localStorage.removeItem("token");
        window.location.href = '/login';
    };
  return (
    <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                    <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                <div class="modal-footer">
                    <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                    <a class="btn btn-primary" onClick={Logout}>Logout</a>
                </div>
            </div>
        </div>
    </div>
  )
}
