import {useState, useEffect} from "react";
function useFetch(url){
    const [data, setData]=useState(null);
    const [error, setError]=useState();
    const [loading, setLoading]=useState();

    useEffect(()=>{
      async function fetchData(){
       try{
        const response= await fetch(url);
        const result= await response.json();
        setData(result);
       } catch(err){
        setError(err)
       }
       finally{
        setLoading(false);
       }
      };
      fetchData();
    },[url]);
    return{data, error, loading}


}
export default useFetch;