import React from 'react';
import serverJson from '../Api/serverJson';
import { async } from 'q';
import axios from 'axios';
import auth from '../Reducers';
import history from '../history'

export  const signIn =(id)=>{
return{
type:'SIGN_IN',
payload:id

};};

export  const signOut =()=>{
return{
    type:'SIGN_OUT'
    
    };};


export const Streamcreated = Formvalue =>async( dispatch,getState)=> {
    const {UserId} = getState().auth;
   const response=  axios.post("http://localhost:4000/streams",{...Formvalue,UserId});
     dispatch({
         type:'Streamscreated',
         payload:response.data
     })
     history.push('/');
    };

export const Allstream =()=>async dispatch=> {
  const response = await     axios.get("http://localhost:4000/streams");
        dispatch({
            type:'allstream',
            payload:response.data
        })
       };

export const Onestream =(id)=>async dispatch=> {
     const   response = await     axios.get(`http://localhost:4000/streams/${id}`);
             dispatch({
                 type:'onestream',
                 payload:response.data
             })
            };      

 export const Streamedited =(id,newvalue)=>async dispatch=> {
           const     response = await     axios.patch(`http://localhost:4000/streams/${id}`,newvalue);
                     dispatch({
                         type:'editstream',
                         payload:response.data
                     })
                     history.push('/');
                    };      

                    
 export const Deletstream =(id)=>async dispatch=> {
   const response = await     axios.delete(`http://localhost:4000/streams/${id}`);
         dispatch({
             type:'deletestream',
             payload:id
         })
         history.push('/');
        };     
        


