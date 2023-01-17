import { configureStore } from '@reduxjs/toolkit'
import {counterSlice} from './slices/counter/counterSlice'
import { pokemonSlice } from './slices/pokemon/pokemonSlice'
import { todosAPi } from './apis/todosApi'
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosAPi.reducerPath]: todosAPi.reducer,

  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(todosAPi.middleware)
})
