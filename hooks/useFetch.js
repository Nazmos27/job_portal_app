import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
// import {RAPID_API_KEY} from 'react-native-dotenv'



const useFetch = (endpoints,query) => {
    const [data,setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error,setError] = useState(null);
    

    // const rapidApiKey = RAPID_API_KEY

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoints}`,
        params: {...query},
        headers: {
          'X-RapidAPI-Key': '6e9f6f23f3msh70c768fb8c19179p1d855ejsnb1be3c5bda5a',
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
      };

    const fetchData = async() => {
        setIsLoading(true);

        try{
            const response = await axios.request(options)
            console.log(response.data.data.length);
            setData(response.data.data)
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
return ({data,refetch,isLoading,error})
}

export default useFetch;