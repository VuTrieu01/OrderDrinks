import React, { useLayoutEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import InfoShopScreen from "../screens/InfoShopScreen";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import MenuProduct from "../screens/MenuProduct";
import PreferenceScreen from "../screens/PreferenceScreen";
import InfoMenu from "../screens/InfoMenu";
import OrderDelivery from "../screens/OrderDelivery";

const TabsHome = createStackNavigator();

export default function ClientHome({ navigation, route }) {
  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (routeName === "Home" || routeName === undefined) {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    }
  }, [navigation, route]);

  return (
    <TabsHome.Navigator>
      <TabsHome.Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />

      <TabsHome.Screen
        name="InfoShopScreenHome"
        component={InfoShopScreen}
        options={() => ({
          headerShown: false,
        })}
      />

      <TabsHome.Screen
        name="InfoMenu"
        component={InfoMenu}
        options={() => ({
          headerShown: false,
        })}
      />

      <TabsHome.Screen
        name="OrderDelivery"
        component={OrderDelivery}
        options={() => ({
          headerShown: false,
        })}
      />

      <TabsHome.Screen
        name="MenuProduct"
        component={MenuProduct}
        options={() => ({
          headerShown: false,
        })}
      />
      <TabsHome.Screen
        name="PreferenceScreen"
        component={PreferenceScreen}
        options={() => ({
          headerShown: false,
        })}
      />
    </TabsHome.Navigator>
  );
}
