import {createContext,useState} from 'react'
import Home from "./Home"
import useFetch from './useFetch';
import {Routes,Route} from 'react-router-dom'

import Error from './Error'
import CountryDisplay from './CountryDisplay';


const CountryContext = createContext()

function App() {
  const [userInput, setUserInput] = useState('');
  const [url, setUrl] = useState('https://restcountries.com/v3.1/all');
  const [isActive, setIsActive] = useState(false)
  const { data } = useFetch(url)
  
  function isActivated() {
    return isActive ? 'light-mode' : '';
}

  return (
    <>
   
    <CountryContext.Provider value={{ userInput, setUserInput, url, setUrl,isActive,setIsActive,data,isActivated }} >

      
      
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/countrypage/:id' element={<CountryDisplay/>}/>
        <Route path='*' element={<Error/>}/>

      </Routes>

    </CountryContext.Provider>


    </>
  );
}

export {App,CountryContext};
