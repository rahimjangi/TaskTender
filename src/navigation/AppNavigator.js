// navigation/AppNavigator.js
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import LandingScreen from "../screens/LandingScreen";
import HomeMenu from "./HomeMenu";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LandingScreen" component={LandingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="HomeScreen" component={HomeMenu} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
