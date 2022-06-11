import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import SearchResultScreen from "../screens/SearchResultScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import InfoShopScreen from "../screens/InfoShopScreen";
import MenuProduct from "../screens/MenuProduct";
import PreferenceScreen from "../screens/PreferenceScreen";
import InfoMenu from "../screens/InfoMenu";
import OrderDelivery from "../screens/OrderDelivery";

const ClientSearch = createStackNavigator();

export default function ClientStack({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "SearchScreen" || routeName === undefined) {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    }
  }, [navigation, route]);

  return (
    <ClientSearch.Navigator>
      <ClientSearch.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <ClientSearch.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="InfoShopScreen"
        component={InfoShopScreen}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="InfoMenu"
        component={InfoMenu}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="OrderDelivery"
        component={OrderDelivery}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="MenuProduct"
        component={MenuProduct}
        options={() => ({
          headerShown: false,
        })}
      />
      <ClientSearch.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </ClientSearch.Navigator>
  );
}
