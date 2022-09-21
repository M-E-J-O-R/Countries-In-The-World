import '../stylesheet/country-page.css';
import ModeToggle from './ModeToggle';
import { MdKeyboardBackspace } from "react-icons/md";
import { useNavigate, useParams } from 'react-router-dom';
import { CountryContext } from './App';
import { useContext } from 'react';
const CountryPage = () => {
    const { data, isActivated } = useContext(CountryContext)
    const navigate = useNavigate()
    let { id } = useParams()
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
                                <p> <b>Currencies: </b> Euro</p>
                                <p>  <b> Language: </b>German , Dutch</p></div>
                            {/* {data[id].currencies} */}

                        </div>

                        <div className="info-three">
                            <h3> Border Countries: </h3>

                            <div className="info-three-country">
                                {data[id].borders.map((neighbour) => {
                                    return (
                                        <p> <small>{neighbour}</small> </p>
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