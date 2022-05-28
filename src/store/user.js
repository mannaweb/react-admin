import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";
import  BASE_URL  from "../config/host";

export const userSlice = createSlice({
    name: 'user',
    loading: false,
    initialState: {
        userList: [],
        loadUser: false,
    },
    reducers:{
        UserListStart: (state,action)=>{
            state.loadUser =true;
         
        },
        UserListFailed: (state,action)=>{
            state.loadUser =false;
            if(action.payload){
                state.userList= action.payload;
            }
        },
        UserListReceived: (state,action)=>{
            state.loadUser =false;
            if(action.payload){
                state.userList= action.payload.data;
            }
        },
        
        
    }
});

export const {UserListReceived,UserListStart,UserListFailed} = userSlice.actions;

export const fetchUsers = (body)=> apiCallBegan({
    url: '/users',
    method: 'post',
    data: body,
    baseUrl: BASE_URL,
    onSuccess: UserListReceived.type,
    onStart: UserListStart.type,
    onError: UserListFailed.type
 
});

