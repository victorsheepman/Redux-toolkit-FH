import React from 'react'
import { useGetPokemonByNameQuery, useGetTodosQuery } from './store/apis/todosApi'

export const TodoApp = () => {
    const {data} = useGetPokemonByNameQuery();
   
  return (
    <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading...</h4>
        <pre>...</pre>
        <button>
            Next Todo
        </button>
    </>
  )
}
