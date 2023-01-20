import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export const localRestaurants = [
    {
        name: "Chinese Royalty",
        image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR39RWzw7zIq6RcSkCmDfRZdrE4j4xK8NptTw&usqp=CAU",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1234,
        ratings: 4.6
    },
    {
        name: "Japanese Royalty",
        image_url: "https://www.azamara.com/sites/default/files/heros/gettyimages-1066110176.jpg",
        categories: ["Cafe", "Bar"],
        price: "$$",
        reviews: 1234,
        rating: 5.0
    }
];

const RestaurantItems = (props) => {
    // console.log("Here am I: " + props.restaurantData[0].image_url);

  return (
    <TouchableOpacity activeOpacity={1} style={{marginBottom: 20}}>
        {props.restaurantData.map((resto, index) => (
            <View key={index} style={{
                marginTop: 10,
                padding: 15,
                backgroundColor:'white'}}>
            <RestaurantImage image={resto.image_url} />
            <RestaurantInfo name={resto.name} rating={resto.rating} />
            </View>
        ))}
    </TouchableOpacity>
  )
};

const RestaurantImage = (props) => (
    <>
        <Image 
            source={{uri: props.image}}
            style={{width: '100%', height: 180}}
        />
        <TouchableOpacity style={{
            position: 'absolute',
            right: 20, 
            top: 20
        }}>
            <MaterialCommunityIcons name="heart-outline" size={24} color="#fff" />
        </TouchableOpacity>
    </>
);

const RestaurantInfo = (props) => (
    <View style={{
        flexDirection: "row", 
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10}}>
        <View>
            <Text style={{fontSize: 15, fontWeight: 'bold'}}>{props.name}</Text>
            <Text style={{fontSize: 13, color: 'gray'}}>30 - 45 . mn</Text>
        </View>
        <View style={{
            backgroundColor: '#eee',
            height: 30,
            width: 30,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 15
        }}>
            <Text>{props.rating}</Text>
        </View>
    </View>
);

export default RestaurantItems;