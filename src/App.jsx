import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../src/store/slices/counter/counterSlice'

function App() {
  const [count, setCount] = useState(0)

  const counter = useSelector((state)=>state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div>
        <span>
        {counter}
      </span>
      </div>
      
    
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          decrement by 2
        </button>
       
    </div>
  )
}

export default App
