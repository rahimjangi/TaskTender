import React from "react";
import { Button, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import HomeMenu from "../navigation/HomeMenu";

export default function HomeScreen() {
  return (
    <NavigationContainer>
      <HomeMenu />
    </NavigationContainer>
  );
}
