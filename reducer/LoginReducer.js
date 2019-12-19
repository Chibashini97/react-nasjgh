import {LOGIN_CLICK} from "../action_type";

const login = {
  isDoneAuthenticate : false,
};

const LoginReducer = (state=login,action) => {
  console.log("sdfsf");
  switch(action.type){
    case LOGIN_CLICK : 
      return 
      isDoneAuthetication : true;
    default :
    return state
    
  }
}

export {LoginReducer}