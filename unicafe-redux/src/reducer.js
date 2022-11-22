const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      if(action.type === 'GOOD'){
        return {...state, good: state.good +1}
      }
      return state

    case 'OK':
      if(action.type === 'OK'){
        return {...state, ok: state.ok +1}
      }
      return state 

    case 'BAD':
      if(action.type === 'BAD'){
        return {...state, bad: state.bad +1}
      }
      return state

    case 'ZERO':
      if(action.type === 'ZERO'){
        return {...initialState}
      }
      return state 
    default: return state
  }
  
}

export default counterReducer