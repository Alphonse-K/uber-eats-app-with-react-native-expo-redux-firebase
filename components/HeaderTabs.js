import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const HeaderTabs = () => {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style={{flexDirection:"row", alignSelf:"center"}}>
      <HeaderButton 
      text="Delivery" 
      btnColor="black" 
      textColor="white" 
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />
      <HeaderButton 
      text="Pickup" 
      btnColor="white" 
      textColor="black" 
      activeTab={activeTab}
      setActiveTab={setActiveTab}
      />
    </View>
  )
}

const HeaderButton = (props) =>
   (
      <TouchableOpacity style={{
        backgroundColor: props.activeTab == props.text? "black": "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}

      onPress={() => props.setActiveTab(props.text)}
      >
        <Text style={{
          color: props.activeTab == props.text? "white": "black",
          fontSize: 15,
          fontWeight: "900"
        }}>{props.text}</Text>
      </TouchableOpacity>
  )


// In react-native, there is no display: flex, we automatically use flexDirection: row


export default HeaderTabs;

