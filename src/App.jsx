import "./main.scss"
import { Home } from "./pages/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/" />
      </Routes>
    </BrowserRouter>
  )
}

export default App
