import { useContext } from "react";
import { CountryContext } from "./App";
import CountryPage from "../components/CountryPage";


const CountryDisplay = () => {
    const { data } = useContext(CountryContext)


    return (

        <>
        {data&&<CountryPage/>}


        </>
    );
};



export default CountryDisplay;

