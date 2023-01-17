import { createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query";

export const todosAPi = createApi({
    reducerPath:'todos',
    baseQuery: fetchBaseQuery({
        baseUrl:'https://jsonplaceholder.typicode.com'
    }),
    endpoints:(builder)=>({
        getTodos:builder.query({
            query: () => '/todos',
        }),
        getPokemonByName: builder.query({
            query: (name) => `pokemon/${name}`,
        }),
    })
})

export const { useGetTodosQuery, useGetPokemonByNameQuery } = todosAPi;