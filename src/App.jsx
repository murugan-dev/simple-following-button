import './App.css'
import { useState } from "react"

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <h1>Hello simple following Button</h1>
      <button className={toggle ? "following btn": "not__following btn"} onClick={()=>setToggle(!toggle)}>{toggle ? "✔ following" : "follow"}</button>
    </>
  )
}

export default App
