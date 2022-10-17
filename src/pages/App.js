import { createContext, useEffect, useState } from 'react'
import Home from "./Home"
import useFetch from '../hooks/useFetch';
import { Routes, Route } from 'react-router-dom'

import Error from './Error'
import CountryDisplay from './CountryDisplay';


const CountryContext = createContext()

function App() {

  const [url, setUrl] = useState('https://restcountries.com/v3.1/all');
  const [isActive, setIsActive] = useState(false)
  const { data } = useFetch(url)

  useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('darkMode'))
    darkMode && setIsActive(darkMode)
  }, [])

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isActive))
  }, [isActive])



  function isActivated() {
    return isActive ? 'dark-mode' : '';
  }

  return (
    <>

      <CountryContext.Provider value={{ url, setUrl, isActive, setIsActive, data, isActivated }} >




        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/countrypage/:id' element={<CountryDisplay />} />
          <Route path='*' element={<Error />} />

        </Routes>

      </CountryContext.Provider>


    </>
  );
}

export { App, CountryContext };
