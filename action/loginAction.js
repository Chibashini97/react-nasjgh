import LOGIN_CLICK from '../../LoginActionType'

const loadWelcome = (dispatch,user) => {
  return dispatch({type:LOGIN_CLICK,user})
}

export {loadWelcome}