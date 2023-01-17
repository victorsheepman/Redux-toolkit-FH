import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'name',
  initialState:{
    count:10
  },
  reducers: {
    increment: (state) => {
      state.count += 1
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    },
  },
})


export const { increment, decrement, incrementByAmount } = todoSlice.actions