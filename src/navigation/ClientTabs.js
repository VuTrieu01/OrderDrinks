import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import MyOrderScreen from "../screens/MyOrderScreen";
import MyAccount from "../screens/MyAccount";
import { Icon } from "@rneui/base";
import { colors } from "../global/styles";
import ClientStack from "./ClientStack";
import ClientHome from "./ClientHome";

const BottomTab = createBottomTabNavigator();

export default function ClientTabs() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.buttons,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <BottomTab.Screen
        name="ClientHome"
        component={ClientHome}
        options={{
          headerShown: false,
          tabBarLabel: "Trang chủ",
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ),
        }}
      />

      <BottomTab.Screen
        name="ClientStack"
        component={ClientStack}
        options={{
          headerShown: false,
          tabBarLabel: "Tìm kiếm",
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
          tabBarLabel: "Giỏ hàng",
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
          tabBarLabel: "Tài khoản",
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" type="material" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}
