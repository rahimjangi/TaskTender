import React from "react";
import { View, Button, Text } from "react-native";
const ProfileScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
};

export default ProfileScreen;
