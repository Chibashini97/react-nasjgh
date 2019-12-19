import React from 'react'
import LoginReducer from './LoginReducer'

const StoreContext = createContext();

function useStore(){
  const store = React.useContext(StoreContext);
  if(!store){
    throw new error();
  }
  return store;
}


export {useStore}