import '../stylesheet/search-bar.css';

import {HiSearch} from 'react-icons/hi'



const SearchBar = ({userInput,setUserInput}) => {
    // let { userInput, setUserInput } = useContext(CountryContext)
    

    return (
        <>
            <div className="search-bar" >

                <HiSearch className='search-logo'/>
               

                
              
                <input placeholder='Search for a country...' type='text'
                    value={userInput}
                    onChange={(e)=>setUserInput(e.target.value)}
                />


            </div>
            
          

        </>



    );
};

export default SearchBar;