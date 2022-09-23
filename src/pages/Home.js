import {useState} from 'react'
import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";

import Region from "./Region";
import '../stylesheet/home.css';
import CountryCard from './CountryCard';
import { useContext } from 'react';
import { CountryContext } from "./App";


const Home = () => {
    const {isActivated} = useContext(CountryContext)
    const [userInput, setUserInput] = useState('');

    return (
        <div className={`container ${isActivated()}
        `}>
           


                <ModeToggle />
                <div className="home">
                    <div className="home-search">
                        <SearchBar userInput={userInput} setUserInput={setUserInput}/>

                        <Region  />

                    </div>
                    <CountryCard userInput={userInput}  />

                </div>
        
      
        </div>

    );
};

export default Home;
