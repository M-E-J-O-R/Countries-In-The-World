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
    function handleSelection(element) {
        if (element.name.official === id) {
            
            return element
        }
    }
    let selectedCountry = data.filter(handleSelection)
    let currencies = []
    let languages = []
    let dataId = selectedCountry[0] 
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
        {console.log(dataId)}
             <div className={`country-page ${isActivated()}
`}>

                <button onClick={() => navigate(-1)}><  MdKeyboardBackspace className='back-logo' /> Back</button>


                <div className="details">

                    <img className='country-flag' src={dataId.flags.svg} alt="country-flag" />




                    <div className="info-container">

                        <section className="info-header">
                            <article className="info-one">
                                <h3>{dataId.name.common} </h3>
                                <p> <b> Native Name:</b> {dataId.name.official}</p>
                                <p> <b> Population:</b> {dataId.population}</p>
                                <p> <b>  Region:</b>{dataId.region}</p>
                                <p> <b> Sub-Region:</b> {dataId.subregion}</p>
                                <p> <b> Capital:</b> {dataId.capital}</p>
                            </article>

                            <article className="info-two">
                                <p><b>Top Level Domain:</b>  {dataId.tld}</p>
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
                            </article>


                        </section>

                        <section className="info-three">
                            <h3> Border Countries: </h3>

                            <article className="info-three-country">


                                {(dataId.borders === undefined) ? '' : dataId.borders.map((neighbour, index) => {
                                    return (
                                        <p key={index}> <small>{neighbour}</small> </p>
                                    )

                                })}


                            </article>


                        </section>

                    </div> 

                </div>






            </div> 
        </>
    )
}

export default CountryPage;