import { Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/Login';
import Reservation from './pages/Reservation';
import NotFound from './pages/NotFound';
import Header from './components/main/Header'
import Footer from './components/main/Footer'
import "./App.scss"
import { createContext } from 'react';
import { useState } from 'react';
export const MyContext = createContext()
function App() {
  const [form, setForm] = useState();
  return (<MyContext.Provider value={{ form, setForm }}>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/reservation/*' element={<Reservation />} />
      <Route path='/login' element={<Login />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
    <Footer />
  </MyContext.Provider>
  )
}

export default App
