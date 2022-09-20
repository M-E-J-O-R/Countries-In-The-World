import ModeToggle from "./ModeToggle";
import SearchBar from "./SearchBar";
import Region from "./Region";
import '../stylesheet/home.css';
import CountryCard from './CountryCard';
import { useContext } from 'react';
import { CountryContext } from "./App";


const Home = () => {
    const {isActivated} = useContext(CountryContext)

    return (
        <div className={`container ${isActivated()}
        `}>
           


                <ModeToggle />
                <div className="home">
                    <div className="home-search">
                        <SearchBar />

                        <Region />

                    </div>
                    <CountryCard />

                </div>
        
      
        </div>

    );
};

export default Home;
