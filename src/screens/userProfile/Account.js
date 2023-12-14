import React from "react";
import { ScrollView, View, Text, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { GlobalStyles } from "../../styles/GlobalStyles";

const Account = () => {
  return (
    <ScrollView style={GlobalStyles.accountContainer}>
      <Text style={GlobalStyles.accountHeader}>Account</Text>

      {/* Combine items from both images into one scrollable list */}
      <SettingItem title="Tax info" />
      <SettingItem title="Manage Uber account" />
      <SettingItem title="Edit address" />
      <SettingItem title="Insurance" />
      <SettingItem title="Privacy" />
      <SettingItem title="Security" />
      <SettingItem title="App settings" />
      <SettingItem title="About" />
      <SettingItem title="Vehicles" description="Toyota Corolla HFM292" />
      <SettingItem title="Work Hub" />
      <SettingItem title="Documents" />
      <SettingItem title="Payment" />
      <SettingItem title="Plus Card" />
    </ScrollView>
  );
};

const SettingItem = ({
  title,
  description = "description",
  name = "card-sharp",
  color = "black",
}) => {
  return (
    <TouchableOpacity style={GlobalStyles.accountItem}>
      {/* Replace with Icon component if you are using one */}
      <Ionicons name={name} size={32} color={color} />
      <Text style={GlobalStyles.accountTitle}>{title}</Text>
      {description && (
        <Text style={GlobalStyles.accountDescription}>{description}</Text>
      )}
      {/* Replace with arrow Icon component */}
    </TouchableOpacity>
  );
};

export default Account;
