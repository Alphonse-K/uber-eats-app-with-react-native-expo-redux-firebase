import { SafeAreaView, ScrollView, Text, View, StyleSheet } from 'react-native';
import React, { useEffect } from 'react';

import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import { REACT_APP_YELP_API_KEY } from '@env';
import AnimatedLoader from 'react-native-animated-loader';


const Home = () => {

  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState();
  const [restaurantData, setRestaurantData] = React.useState(localRestaurants);
  const [city, setCitty] = React.useState("San Francisco");
  const spinner = () => {
    const styles = StyleSheet.create({
      lottie: {
        width: 170,
        height: 170,
      },
    });
      return ( 
        <AnimatedLoader
          visible={isLoading}
          overlayColor="#eee"
          source={require("../assets/animations/food-vlogger.json")}
          animationStyle={styles.lottie}
          speed={1}
        >
          <Text>Loading...</Text>
        </AnimatedLoader>
      );
    }
  



  const getRestaurantsFromYelp = async () => {

    const apiUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {headers: {"Authorization": `Bearer ${REACT_APP_YELP_API_KEY}`,},}
    return await fetch(apiUrl, apiOptions)
                      .then((res) => res.json())
                      .then((data) => {
                        console.log(data.businesses)
                        setIsLoading(false);
                        setRestaurantData(data.businesses.filter((business) =>
                        business.transations.includes(activeTab.toLowerCase())));
                      },
                      (err) => {
                        setIsLoading(false);
                        setError(err);
                      }
                  )
        };

    useEffect(() => {
      getRestaurantsFromYelp();
    }, [city])

    return (
      <>
      {!isLoading ?
         <SafeAreaView style={{backgroundColor: "#eee", flex: 1}}>
           <View style={{backgroundColor: "white", padding: 20}}>
             <HeaderTabs/>
             <SearchBar cityHandler={setCitty}/>
           </View>
           <ScrollView showsVerticalScrollIndicator={false}>
             <Categories/>
             <RestaurantItems 
              restaurantData={restaurantData} />
           </ScrollView>
         </SafeAreaView>
         : spinner()
        }
      </>
    )
  }


export default Home;

// flex: 1 attribute, applies the style to the whole component

