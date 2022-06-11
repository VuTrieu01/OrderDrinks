import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTabs from "./ClientTabs";
import { Icon } from "@rneui/base";
import { colors } from "../global/styles";
import BusinessConsoleScreen from "../screens/BusinessConsoleScreen";
import DrawerContent from "../components/DrawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          headerShown: false,
          title: "Trang chủ",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="BusinessConsoleScreen"
        component={BusinessConsoleScreen}
        options={{
          headerShown: false,
          title: "Kinh doanh",
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material"
              name="business"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
