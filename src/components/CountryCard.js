import { useContext } from 'react';

import { CountryContext } from '../pages/App';
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
    let sortedData = [...data]
    sortedData.sort((a, b) => a.name.official > b.name.official ? 1 : -1)

    return (

        <>

            <div className="country-card-container">


                {sortedData.map((datas, index) => {
                    return (
                        (datas.name.common.toLowerCase().includes(userInput.toLowerCase()) || userInput === '') &&

                        <div id={datas.name.official.toLowerCase()} key={index} onClick={() => navigate(`/countrypage/${datas.name.official}`)} className="country-card">



                            <section className="country-flags" style={{
                                backgroundImage: `url(${datas.flags.svg})`
                            }}></section>

                            <section className='country-details'>
                                <h4 className='country-name'>{datas.name.official}</h4>

                                <p><b>Population:</b>  {datas.population}</p>
                                <p> <b>Region:</b> {datas.region}</p>
                                <p> <b>Capital:</b> {datas.capital}</p>
                            </section>




                        </div>

                    )


                })}



            </div>


        </>
    );
}
export default CountryCard;
