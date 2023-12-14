import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import MapView from "react-native-maps"; // You need to install this package
import { GlobalStyles } from "../../styles/GlobalStyles";
const MainBoard = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* Map Component */}
      <MapView
        style={{ flex: 1 }}
        // initialRegion={{
        //   latitude: YOUR_LATITUDE,
        //   longitude: YOUR_LONGITUDE,
        //   latitudeDelta: LATITUDE_DELTA,
        //   longitudeDelta: LONGITUDE_DELTA,
        // }}
        // You can enable the user's location with showsUserLocation={true}
      >
        {/* You can add markers on the map using the MapView.Marker component */}
      </MapView>

      {/* Floating Menu Button */}
      <TouchableOpacity
        style={{
          position: "absolute", // to float on the map
          top: 10,
          left: 10,
          backgroundColor: "#fff",
          // Add rest of your styling for the menu button
        }}
        onPress={() => {
          /* Open menu action */
        }}
      >
        {/* <Image source={require("./path-to-your-menu-icon.png")} /> */}
      </TouchableOpacity>

      {/* Offline Banner */}
      <View
        style={{
          position: "absolute",
          bottom: 10,
          width: "100%",
          // Add your styling here
        }}
      >
        <Text style={{ textAlign: "center" }}>You're offline</Text>
      </View>

      {/* Go Button */}
      <TouchableOpacity
        style={{
          position: "absolute",
          bottom: 80,
          alignSelf: "center",
          backgroundColor: "blue",
          padding: 15,
          borderRadius: 30,
          // Add rest of your styling for the Go button
        }}
        onPress={() => {
          /* Go action */
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>Go</Text>
      </TouchableOpacity>

      {/* Search and other controls can be added similarly using absolute positioning */}
    </View>
  );
};

export default MainBoard;
