import { useState, useEffect } from "react";
import yelp from "../api/yelp";


export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi  = async (searchTerm) => { // we create a async fun to communocate api and
                          // in this no initial data for initial page so we add 
                          // searchterm argument to async function 
      try {
        const response = await yelp.get('/search', { // to wait a get results from api
           params: {
               location : 'san jose',
               limit: 50,
               term : searchTerm
           }
       });
       setResults(response.data.businesses);
    //    console.log(response.data.businesses)
         }catch(err){
            setErrorMessage('Something went a wrong');
         }
    };
    // Call search api when component is first renderd, so we useEffect hook its mainly 
    // run some additional code after React has updated the DOM.
    useEffect(()=> {
        searchApi('Beef');
    },[])
    
    return [searchApi, results, errorMessage]
};