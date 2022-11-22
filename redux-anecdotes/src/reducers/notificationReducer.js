import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
    name: 'notificaton',
    initialState,
    reducers: {

        createNotification(state, action) { 
          return action.payload            
          },
        clearNotification(state, action) {
          return null
          }
      
        }
      })

export const { createNotification, clearNotification} = notificationSlice.actions

let timeoutId = null


export const setNotification = (message, seconds) => {

    return  dispatch => {
      dispatch(createNotification(message))

      clearTimeout(timeoutId) 

      timeoutId = setTimeout(() => {
          dispatch(clearNotification())
      }, 500*seconds)
     
      
    }
  }

export default notificationSlice.reducer
