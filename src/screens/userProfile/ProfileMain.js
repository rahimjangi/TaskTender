import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../styles/GlobalStyles"; // Assuming this is the path to your styles

const ProfileMain = () => {
  return (
    <View style={GlobalStyles.container}>
      {/* Profile Header */}
      <View style={{ alignItems: "center", marginBottom: 30 }}>
        <Text style={{ fontSize: 32, fontWeight: "bold", color: "#333" }}>
          MOSTAFA
        </Text>
        <TouchableOpacity
          onPress={() => {
            /* Navigate to edit profile */
          }}
        >
          <Text style={{ color: "#0000FF", marginTop: 10 }}>
            View profile →
          </Text>
        </TouchableOpacity>
      </View>

      {/* Insights */}
      <View style={{ alignSelf: "stretch", marginBottom: 30 }}>
        <Text style={GlobalStyles.titleText}>Insights</Text>
        <InfoRow label="Satisfaction rating" value="96%" />
        <InfoRow label="Acceptance rate" value="90%" />
        <InfoRow label="Cancellation rate" value="0%" />
      </View>

      {/* Highlights */}
      <View style={{ alignSelf: "stretch" }}>
        <Text style={GlobalStyles.titleText}>Highlights</Text>
        <HighlightRow label="Deliveries" value="268" />
        <HighlightRow label="On Uber since" value="2023" />
      </View>
    </View>
  );
};

const InfoRow = ({ label, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    }}
  >
    <Text style={{ fontSize: 16, color: "#555" }}>{label}</Text>
    <Text style={{ fontSize: 16, color: "#333", fontWeight: "bold" }}>
      {value}
    </Text>
  </View>
);

const HighlightRow = ({ label, value }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
    }}
  >
    <Text style={{ fontSize: 18, color: "#333", fontWeight: "bold" }}>
      {label}
    </Text>
    <Text style={{ fontSize: 18, color: "#333", fontWeight: "bold" }}>
      {value}
    </Text>
  </View>
);

export default ProfileMain;
