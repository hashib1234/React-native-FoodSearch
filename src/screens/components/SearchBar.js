import  React from "react";
import { Feather } from '@expo/vector-icons'; 
import { View, StyleSheet, TextInput  } from "react-native";

const SearchBar = ({ term, onTermChange, onTermSubmited})=>{
return <View style={style.backgroundStyle}>
     <Feather name="search" 
     style = {style.iconStyle}
     color="black" />
     <TextInput 
        style={style.inputstyle} 
        placeholder= "Search"
        value= {term}
        onChangeText = { newText => onTermChange(newText)}
        autoCapitalize = "none"
        autoCorrect = {false}
        onEndEditing = { onTermSubmited}
     />
</View>
};

const style = StyleSheet.create({
    backgroundStyle : {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        marginTop: 10,
        flexDirection: 'row', // all elements are a same line
        marginBottom: 10

     },
     inputstyle :{
        flex: 1,
        fontSize: 18
     },
     iconStyle : {
         fontSize: 35,
         alignSelf: 'center',
         marginHorizontal: 15
     }


});


export default SearchBar;