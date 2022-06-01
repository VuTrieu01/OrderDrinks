import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import SearchScreen from "../screens/SearchScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import MyAccount from "../screens/MyAccount";
import { Icon } from "@rneui/base";
import { colors } from "../global/styles";

const BottomTab = createBottomTabNavigator();

export default function ClientTabs() {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        activeTintColor: colors.buttons,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => (
            <Icon name="search" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="MyOrderScreen"
        component={MyOrderScreen}
        options={{
          headerShown: false,
          tabBarLabel: "MyOrder",
          tabBarIcon: ({ color, size }) => (
            <Icon name="view-list" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="MyAccount"
        component={MyAccount}
        options={{
          headerShown: false,
          tabBarLabel: "MyAccount",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
