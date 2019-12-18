import React from 'react'
import LoginReducer from './LoginReducer'

function Store(){
  const store = createStore(LoginReducer);
  <Provider store={store}>
    <Login/>
  </Provider>
}

export {store}