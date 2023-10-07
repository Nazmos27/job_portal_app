import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import {RAPID_API_KEY} from 'react-native-dotenv'



const useFetch = (endpoints,query) => {
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(false);

    const rapidApiKey = RAPID_API_KEY

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoints}`,
        headers: {
          'X-RapidAPI-Key': rapidApiKey,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: {...query},
      };

    const fetchData = async() => {
        setIsLoading(true);

        try{
            const response = await axios.request(options)
            setData(response)
            setIsLoading(false)

        }catch(error){
            setError(error)
            alert("this is an error")
        }finally{
            setIsLoading(false)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    const refetch=()=>{
        setIsLoading(true);
        fetchData();
    }

    return {data,refetch,isLoading,error}
}

export default useFetch;