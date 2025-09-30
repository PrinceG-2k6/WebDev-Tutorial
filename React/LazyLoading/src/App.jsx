import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const User = lazy(() => import('./user'));

function App() {

  const [load, setLoad] = useState(false)

  return (
    <>
      <div>
        <h1>Lazy Loading</h1>
        <button onClick={() => setLoad(true)}>Load user</button>
        {
          load ? <Suspense fallback={<h3>Loading.....</h3>}></Suspense> : null
        }
      </div>
    </>
  )
} 

export default App
