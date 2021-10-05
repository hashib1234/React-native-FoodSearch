import React from "react";
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import ResultsDetails from "./ResultsDeatail";

const ResultsList = ({ title, resultsbyPrice, navigation }) => {
 
     if(!resultsbyPrice.length)
     {
         return null;
     }
    return (
        <View style= {style.container}>
            <Text style = {style.title}>{title}</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator = {false}
              data ={resultsbyPrice}
              keyExtractor = { (resultsbyPrice) => resultsbyPrice.id}
              renderItem = { ({item})=>{
                  return (
                        <TouchableOpacity 
                            onPress = {() => 
                                navigation.navigate('ResultShow', {id: item.id})
                                }> 
                            <ResultsDetails results = {item}
                            />
                        </TouchableOpacity>
                    );
              } }
            />

        </View>
    );
};


const style = StyleSheet.create({
 title : {
     fontSize: 20,
     fontWeight: 'bold',
     marginLeft: 15,
     marginBottom: 5
 },
 container : {
     marginBottom: 10
 }
});


export default withNavigation(ResultsList);