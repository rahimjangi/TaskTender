import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import ProfileMain from "../screens/userProfile/ProfileMain";
import MainBoard from "../screens/userProfile/MainBoard";
import Account from "../screens/userProfile/Account";
import Inbox from "../screens/userProfile/Inbox";
import Earnings from "../screens/userProfile/Earnings";
import AddYourBank from "../screens/userProfile/AddYourBank";
import NotificationsScreen from "../screens/NotificationsScreen";

const Drawer = createDrawerNavigator();

const HomeMenu = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MainBoard" component={MainBoard} />
      <Drawer.Screen name="ProfileMain" component={ProfileMain} />
      <Drawer.Screen name="Account" component={Account} />
      <Drawer.Screen name="Inbox" component={Inbox} />
      <Drawer.Screen name="Earnings" component={Earnings} />
      <Drawer.Screen name="AddYourBank" component={AddYourBank} />
      <Drawer.Screen name="Notification" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
};

export default HomeMenu;
