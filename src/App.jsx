import React from "react"
import { Route, Routes } from "react-router-dom"
import Test from "./Components/Test"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Test />} />
    </Routes>
  )
}

export default App
