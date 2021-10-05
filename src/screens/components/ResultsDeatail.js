 import React from 'react';
 import { Text, View, StyleSheet, Image} from 'react-native';



 const ResultsDetails = ({results}) =>{
     return (
         <View style= {style.container}>
             <Image style={style.image} source= {{ uri: results.image_url }} />
             <Text>{results.name}</Text>
             <Text>
                 {results.rating} Stars, {results.review_count} Reviews
             </Text>
         </View>
     );
 };



 const style = StyleSheet.create({
    container: {
        marginLeft : 15
    },
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5
    },
    name : {
        fontWeight : 'bold',
        fontSize: 16
    }
 });



 export default ResultsDetails;