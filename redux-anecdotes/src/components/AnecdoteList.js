import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from "../reducers/notificationReducer"


const Anecdote = ({anecdote, handleClick}) => {
    return(
    <div>
        {anecdote.content}
        <div>
        has {anecdote.votes}
        <button onClick={(event) => handleClick(event, anecdote.id)}>vote</button>
        </div>
    </div>
    )
}



const AnecdoteList = () => {
  const dispatch = useDispatch()
 
  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)

  const anecdotesToShow = filter
       ? anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))   
       : anecdotes 

       
      
  
  return(
    <div>
      {[...anecdotesToShow]
        .sort((a, b) => (b.votes - a.votes))
        .map(anecdote =>
            <Anecdote 
                key={anecdote.id}
                anecdote={anecdote}
                handleClick={() =>
                dispatch(vote(anecdote.id)) && 
                dispatch(setNotification(`you voted: ${anecdote.content}`, 10)) 
                }
            />
             
         )}
    </div>
  )
}

export default AnecdoteList