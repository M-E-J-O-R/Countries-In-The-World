import { useContext } from 'react';
import { CountryContext } from '../pages/App';
import '../stylesheet/region.css';

const Region = () => {
    const { setUrl } = useContext(CountryContext);

    const regionSelector = (e) => {
        const regionValue = (e.target.value);
        if (regionValue !== 'all') {
            setUrl(`https://restcountries.com/v3.1/region/${regionValue}`);
        }
        else {
            setUrl(`https://restcountries.com/v3.1/all`);
        }

        // if (regionValue === 'africa') {
        //     setUrl(`https://restcountries.com/v3.1/region/africa`);
        //     console.log(url)
        // }
        // else if (regionValue === 'asia') {
        //     setUrl(`https://restcountries.com/v3.1/region/asia`);
        //     console.log(url)
        // }
        // else if (regionValue === 'americas') {
        //     setUrl('https://restcountries.com/v3.1/region/americas');
        //     console.log(url)
        // }
        // else if (regionValue === 'europe') {
        //     setUrl('https://restcountries.com/v3.1/region/europe');
        //     console.log(url)
        // }
        // else if (regionValue === 'oceania') {
        //     setUrl('https://restcountries.com/v3.1/region/oceania');
        //     console.log(url)
        // }
        // else  {
        //     setUrl('https://restcountries.com/v3.1/all');
        //  }


    };
    return (

        <div className="region-container">
            <select onInput={regionSelector} name="region" id="region">
                <option id='filter' value="">Filter by Region</option>
                <option value="all">All</option>
                <option className='option' value="africa">Africa</option>
                <option value="americas">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    );
};


export default Region;

