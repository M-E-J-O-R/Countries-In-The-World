import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState('');

    useEffect(() => {
        fetch(url)
            .then(data => data.json())
            .then(data => setData(data))
            .catch(err=>console.log(err))
            
    }, [url]);
     return {data}
};


export default useFetch;