import React, {useState,useEffect} from 'react'
import {useStore} from './Store.js'
import Login from './Login'

const LoginContainer = () =>{
  const{
    state : {authentication : login},
    dispatch,
    }=useStore();
console.log(state);
  return state;
}
