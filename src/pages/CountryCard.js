import { useContext } from 'react';

import { CountryContext } from './App';
import '../stylesheet/country-card.css';
import { useNavigate } from 'react-router-dom';


const CountryCard = ({ userInput }) => {
    const { data } = useContext(CountryContext)

    return (
        <>
            {
                data ? <Card data={data} userInput={userInput} /> : <p>Loading...</p>
            }
        </>


    );
};


function Card({ data, userInput }) {

    let navigate = useNavigate()

    return (

        <>

            <div className="country-card-container">


                {data.map((datas, index) => {
                    return (
                        <div key={index} onClick={() => navigate(`/countrypage/${index}`)} className="country-card">

                            {

                                (datas.name.common.toLowerCase().includes(userInput.toLowerCase()) || userInput === '') &&

                                (<>

                                    <div className="country-flags" style={{
                                        backgroundImage: `url(${datas.flags.svg})`
                                    }}></div>

                                    <div className='country-details'>
                                        <h4 className='country-name'>{datas.name.official}</h4>

                                        <p><b>Population:</b>  {datas.population}</p>
                                        <p> <b>Region:</b> {datas.region}</p>
                                        <p> <b>Capital:</b> {datas.capital}</p>
                                    </div>
                                </>

                                )

                            }</div>

                    )


                })}



            </div>


        </>
    );
}
export default CountryCard;
