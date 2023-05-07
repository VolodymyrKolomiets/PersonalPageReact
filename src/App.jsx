import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import Header from './components/Header/Header'
import UserForm from './components/Contact/Contact'
import Home from './components/Home/Home';
import About from './components/About/About';


function App() {
  
  return (
    <>
         <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<UserForm />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
