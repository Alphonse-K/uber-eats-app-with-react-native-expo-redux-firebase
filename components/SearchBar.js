import { View, Text } from 'react-native'
import React from 'react'
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import IonIcons from "react-native-vector-icons/Ionicons";
import { REACT_APP_TOMTOM_API_KEY } from '@env';


const SearchBar = ({cityHandler}) => {
  return (
     <View style={{marginTop: 15,  overflow: 'hidden',}}>
      <AutoCompleteInput 
      inputProps={{
        padding: 5,
        placeholder: "Search",
        fontWeight: '700',
        fontSize: 20,
        
      }}
      onPress={(item) => {
              var item = item.address.freeformAddress.split(/[\s,]/);
              var result = [];
              for(var i = 0; i<item.length; i++) {
                if(item[i].length == 0) {
                  break;
                } else {
                  result.push(item[i])
                }
              }          
              // console.log(result.join(" "));
              cityHandler(result.join(" "))    
                }
              }
      inputContainerStyle={{
          backgroundColor: '#eee',
          borderRadius: 30,
          padding: 5,
      }}
      listItemsContainerStyle={{
          borderLeftWidth: 0,
          fontWeight: '500',
          borderWidth: 2,
          borderColor: "#eee",
      }}
      bottomDivider

      // delay={0}

      tomtomOptions={{ key: `¨${REACT_APP_TOMTOM_API_KEY}` }}

      leftElement={() => (
        <View style={{marginLeft: 10}}>
            <IonIcons name="location-sharp" size={24} />
        </View>
      )}
      />
    </View> 
  )
}

export default SearchBar