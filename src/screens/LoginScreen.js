// screens/LoginScreen.js
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../styles/GlobalStyles"; // Adjust the path as needed

const LoginScreen = ({ navigation }) => {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>
        What's your phone number or email?
      </Text>
      <TextInput
        style={GlobalStyles.inputField}
        placeholder="Enter your email"
        keyboardType="email-address"
        // other props such as onChangeText and value
      />
      <TouchableOpacity
        style={GlobalStyles.primaryButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Text style={GlobalStyles.primaryButtonText}>Continue</Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.orText}>or</Text>
      <TouchableOpacity
        style={GlobalStyles.secondaryButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        {/* Include Google logo */}
        <Text style={GlobalStyles.secondaryButtonText}>
          Continue with Google
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={GlobalStyles.secondaryButton}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        {/* Include Facebook logo */}
        <Text style={GlobalStyles.secondaryButtonText}>
          Continue with Facebook
        </Text>
      </TouchableOpacity>
      <Text style={GlobalStyles.smallPrintText}>
        By proceeding, you consent to get calls, WhatsApp or SMS messages...
      </Text>
    </View>
  );
};

export default LoginScreen;
