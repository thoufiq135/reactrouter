import Head from "./navbar"
import Me from "./dashboard"
import Home from "./home"
import Sign from "./sign";


import { BrowserRouter,Routes,Route } from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
      <Head/>
  
      <Routes>
        <Route path="/dashboard" element={<Me />} />
        <Route path="/sign" element={<Sign/>} />
        <Route path="/login" element={<div>Login Page</div>} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
   </>
    
  )
}

export default App
