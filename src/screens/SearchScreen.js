import  React, { useState} from "react";
import { View, StyleSheet, Text, Alert, ScrollView} from "react-native";
import SearchBar from './components/SearchBar';
import useResults from "./hooks/useResults";
import ResultsList from "./components/ResultsList";


const SearchScreen = ()=>{
   
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();
    
    const filtterResultsbyPrice = (price) =>{
     return results.filter(results => {
       return results.price == price;
     })
    };
    const error = () => {
      Alert.alert(
          "try later",
          errorMessage,
          [
            {
              text: "Cancel",
              style: "cancel"
            },
            { text: "OK" }
          ]
        );
    }
return (
  <>
  
     <SearchBar 
        term ={term} 
        onTermChange={(changedtext)=>{setTerm(changedtext)}} 
        onTermSubmited = {() => searchApi(term)}
     />
     
    {errorMessage ? error(): null }
    <ScrollView>
        <ResultsList 
        resultsbyPrice = {filtterResultsbyPrice('$')} 
        title = "Cost Effective"
        
        />

        <ResultsList 
        resultsbyPrice = {filtterResultsbyPrice('$$')} 
        title = "Bit Price"
        
        />
        <ResultsList 
        resultsbyPrice = {filtterResultsbyPrice('$$$')} 
        title = "Big Spender"
        
        />
    </ScrollView>
</>
)
};

const style = StyleSheet.create({

});


export default SearchScreen;