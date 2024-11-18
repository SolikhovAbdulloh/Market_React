import { useState } from 'react'
import GET from './MARKET/GET'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GET/>
    </>
  )
}

export default App
