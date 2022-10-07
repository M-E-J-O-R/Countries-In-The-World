import '../stylesheet/country-page.css';
import ModeToggle from './ModeToggle';
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { CountryContext } from '../pages/App';
import { useContext } from 'react';



const CountryPage = () => {
    const { data, isActivated } = useContext(CountryContext)
    const navigate = useNavigate()
    let { id } = useParams()
    let currencies = []
    let languages = []
    let dataId = data[id]
    function objectMap() {
        for (let x in dataId.currencies) {
            currencies.push(dataId.currencies[x].name)
        }
        for (let y in dataId.languages) {
            languages.push(dataId.languages[y])
        }
    }
    objectMap()



    return (
        <>
            <ModeToggle />

            <div className={`country-page ${isActivated()}
`}>

                <button onClick={() => navigate(-1)}><  MdKeyboardBackspace className='back-logo' /> Back</button>


                <div className="details">

                    <img className='country-flag' src={data[id].flags.svg} alt="country-flag" />




                    <div className="info-container">

                        <div className="info-header">
                            <div className="info-one">
                                <h3>{data[id].name.common} </h3>
                                <p> <b> Native Name:</b> {data[id].name.official}</p>
                                <p> <b> Population:</b> {data[id].population}</p>
                                <p> <b>  Region:</b>{data[id].region}</p>
                                <p> <b> Sub-Region:</b> {data[id].subregion}</p>
                                <p> <b> Capital:</b> {data[id].capital}</p>
                            </div>

                            <div className="info-two">
                                <p><b>Top Level Domain:</b>  {data[id].tld}</p>
                                <p>
                                    <b>Currencies: </b>
                                    {currencies.map((currency, index) => {
                                        return <span key={index} className='spaced'>{currency}</span>
                                    })}
                                </p>
                                <p>
                                    <b> Language: </b>
                                    {languages.map((language, index) => {
                                        return <span className='spaced' key={index}>{language}</span>
                                    })}
                                </p>
                            </div>


                        </div>

                        <div className="info-three">
                            <h3> Border Countries: </h3>

                            <div className="info-three-country">


                                {(data[id].borders === undefined) ? '' : data[id].borders.map((neighbour, index) => {
                                    return (
                                        <p key={index}> <small>{neighbour}</small> </p>
                                    )

                                })}


                            </div>


                        </div>

                    </div>

                </div>






            </div>
        </>
    )
}

export default CountryPage;