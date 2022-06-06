import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import SignInWelcome from "../screens/authScreens/SignInWelcome";
import SignInScreen from "../screens/authScreens/SignInScreen";
import MapScreen from "../screens/MapScreen";
import DrawerNavigator from "./DrawerNavigator";
import SearchResultScreen from "../screens/SearchResultScreen";
import InfoShopScreen from "../screens/InfoShopScreen";

const Auth = createStackNavigator();

export default function AuthStack() {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="SignInWelcome"
        component={SignInWelcome}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="DrawerNavigator"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        }}
      />
      <Auth.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        })}
      />
      <Auth.Screen
        name="InfoShopScreen"
        component={InfoShopScreen}
        options={() => ({
          headerShown: false,
          ...TransitionPresets.RevealFromBottomAndroid,
        })}
      />
    </Auth.Navigator>
  );
}
