import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, FlatList , Image} from 'react-native';
import yelp from './api/yelp';


const ResultShowScreen = ({ navigation }) => {
    const [result, setResult] = useState(null); // it shows defult the results stats is null

    const id = navigation.getParam('id');
    const getResult = async (id) =>{
     const response =  await yelp.get(`/${id}`);
     setResult(response.data);
    };
    useEffect(() => {
        getResult(id); // its means the initial load using useEffect Hook with data
    },[]);

if (!result)
{
    return null;
}


 return (
 <View>
     <FlatList data = {result.photos}
     keyExtractor = {(photo) => photo}
     renderItem = {({item}) => {
            return <Image style = {styles.image} source= {{ uri: item }} />
     }}
     />
 </View>
 )
};
 
const styles = StyleSheet.create({
    image : {
    height: 200,
    width: 400
    }

});

export default ResultShowScreen;