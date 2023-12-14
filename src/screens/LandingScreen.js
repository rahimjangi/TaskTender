// screens/LandingScreen.js
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles"; // Adjust the path as needed

const LandingScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Image
        source={require("../assets/logo.png")} // Replace with your actual logo file path
        style={GlobalStyles.logo}
      />
      <Text style={GlobalStyles.titleText}>Welcome to TaskTender</Text>
      <Text style={GlobalStyles.descriptionText}>
        Find tasks near you or get help with your projects quickly and easily.
      </Text>
      <TouchableOpacity
        style={GlobalStyles.primaryButton}
        onPress={() => navigation.navigate("LoginScreen")} // Replace with your actual login screen name
      >
        <Text style={GlobalStyles.primaryButtonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LandingScreen;
