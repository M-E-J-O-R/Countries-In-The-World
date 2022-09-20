import { useContext } from 'react';

import { CountryContext } from './App';
import '../stylesheet/country-card.css';
import { useNavigate } from 'react-router-dom';


const CountryCard = () => {
    const { data } = useContext(CountryContext)

    return (
        <>
            {
                data ? <Card data={data} /> : <p style={{ color: 'white' }}>Loading...</p>
            }
        </>


    );
};


function Card({ data }) {
    const { userInput } = useContext(CountryContext);
    let navigate = useNavigate()
    function filteredName(data) {

        if (data.name.common.toLowerCase().includes(userInput.toLowerCase())) {
            return data;
        }
        else if (data === '') {
            return data;
        }
    }



    return (

        <>
            <div className="country-card-container">

                {data.filter(filteredName).map((data, key) => {


                    return (<div key={key} onClick={() => navigate(`/countrypage/${key}`)} className="country-card">
                        <div className="country-flags" style={{
                            backgroundImage: `url(${data.flags.svg})`
                        }}></div>

                        <div className='country-details'>
                            <h4 className='country-name'>{data.name.official}</h4>

                            <p><b>Population:</b>  {data.population}</p>
                            <p> <b>Region:</b> {data.region}</p>
                            <p> <b>Capital:</b> {data.capital}</p>
                        </div>
                    </div>

                    );

                })}
            </div>


        </>
    );
}
export default CountryCard;
