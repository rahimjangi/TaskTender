import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileScreen from "../screens/ProfileScreen";
import NotificationsScreen from "../screens/NotificationsScreen";

const Drawer = createDrawerNavigator();

const HomeMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Notification" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeMenu;
