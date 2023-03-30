import { useQuery, useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'
import anecdoteService from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()

  const getId = () => (100000 * Math.random()).toFixed(0)

  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueriesData('anecdotes', anecdotes.concat(newAnecdote))


    }
  })

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    newAnecdoteMutation.mutate({ content, votes: 0, id: getId() })


  }

  const HandleNotification = () => {
    const dispatch = useNotificationDispatch()
    dispatch({ type: "SHOW" })
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
