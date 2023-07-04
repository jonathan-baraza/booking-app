import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const StackNavigator = () => {

    function BottoTabs(){
        return(
            <Tab.Navigator>
                <Tab.Screen name="Home" />
            </Tab.Navigator>
        )
    }

  return (
    <View>
      <Text>StackNavigator</Text>
    </View>
  );
};

export default StackNavigator;
