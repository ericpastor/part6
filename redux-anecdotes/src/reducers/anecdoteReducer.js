import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {

    appendAnecdote(state, action) {
      state.push(action.payload)
    },

    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const vote = id =>{
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdoteAddVote = anecdotes.find(a => a.id === id)
    const object = {...anecdoteAddVote, votes: anecdoteAddVote.votes + 1}
    
    const changedVotes = await anecdoteService.addingVotes(id, object)
    dispatch(
      setAnecdotes(anecdotes
        .map(anecdote => anecdote.id !== id ? anecdote : changedVotes)))
   
  }
}

export default anecdoteSlice.reducer