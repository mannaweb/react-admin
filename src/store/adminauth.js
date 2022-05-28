import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import  BASE_URL  from "../config/host";

export const authSlice = createSlice({
    name: 'adminauth',
    loading: false,
    initialState: {
        loginData: [],
        userInfo: [],
        loadLogin : false,
        logoutData : []
        
    },
    reducers:{
        LoginStart: (state,action)=>{
            state.loadLogin =true;
         
        },
        LoginFailed: (state,action)=>{
            state.loadLogin =false;
            if(action.payload){
                state.loginData= action.payload;
            }
        },
        LoginDetailsReceived: (state,action)=>{
            state.loadLogin =false;
            if(action.payload){
                state.loginData= action.payload;
            }
        },
        getUserReceived: (state,action)=>{
          state.userInfo= action.payload;
        },
        logoutReceived: (state,action)=>{
          state.logoutData= action.payload;
       }
        
    }
});

export const {LoginDetailsReceived,LoginStart,LoginFailed,getUserReceived,logoutReceived} = authSlice.actions;

export const loginUser = (body)=> apiCallBegan({
    url: '/login',
    method: 'post',
    data: body,
    baseUrl: BASE_URL,
    onSuccess: LoginDetailsReceived.type,
    onStart: LoginStart.type,
    onError: LoginFailed.type
 
});

export const getTokenDetails = (body)=> apiCallBegan({
    url: '/get_user',
    method: 'post',
    data: body,
    baseUrl: BASE_URL,
    onSuccess: getUserReceived.type,
 
});

export const logoutUser = (body)=> apiCallBegan({
    url: '/logout',
    method: 'post',
    data: body,
    baseUrl: BASE_URL,
    onSuccess:logoutReceived.type,
 
});

