import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemons } from './store/slices/pokemon/thunks';

export const PokemonApp = () => {

  const dispatch = useDispatch();
  const { isLoading, pokemons } = useSelector((state)=>state.pokemons);
 

  useEffect(() => {
    dispatch(getPokemons());
  }, [])
  return (
    <>
        <h1>Pokemon app</h1>
        <hr />
        {
          isLoading 
          ?  
          <span>loading</span>
          :  
          
          <ul>
            {
              pokemons.map((pokemon)=>(
                <li key={pokemon.name}>{pokemon.name}</li>
              ))
            }
          </ul> 
         
        }
        <br />
        <br />
        
      
        <button 
          disabled={isLoading}
          onClick={()=> dispatch(getPokemons(1))}

        >
          Next
        </button>
    </>
  )
}
