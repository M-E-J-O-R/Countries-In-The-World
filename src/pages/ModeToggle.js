import { useContext } from 'react';
import { FaMoon } from 'react-icons/fa';
import '../stylesheet/mode-toggle.css';
import { CountryContext } from './App';

const ModeToggle = () => {
    const {isActive, setIsActive,isActivated} = useContext(CountryContext);
    
    function activeToggle() {
        setIsActive(!isActive);
    }
   
 
  
    return (
        <div className={`mode-panel ${isActivated()}`}>
            <h2>Where in the world?</h2>
            <div className="mode">
                <FaMoon onClick={()=>activeToggle()}
                    className='mode-logo' />
                <p>Dark Mode</p>


            </div>
        </div>
    );
};

export default ModeToggle;