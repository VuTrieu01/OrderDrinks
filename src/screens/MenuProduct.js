import { StyleSheet, Text, View, Dimensions } from "react-native";
import React, { useState } from "react";
import SmallMenu, {
  RouteSmallMenu1,
  RouteSmallMenu2,
  RouteSmallMenu3,
  RouteSmallMenu4,
  RouteSmallMenu5,
  RouteSmallMenu6,
  RouteSmallMenu7,
  RouteSmallMenu8,
} from "./shopTabs/SmallMenu";
import { colors } from "../global/styles";
import { menu } from "../global/data";
import { Icon } from "@rneui/base";
import { TabBar, TabView } from "react-native-tab-view";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function MenuProduct({ navigation, route }) {
  const [routes] = useState(menu);
  const [index, setIndex] = useState(0);
  const productData = route.params.productData;

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: colors.cardBackground }}
      tabStyle={styles.tabStyle}
      scrollEnabled={true}
      style={styles.tab}
      labelStyle={styles.tabLabel}
      contentContainerStyle={styles.tabContainer}
    />
  );
  const renderScreen = ({ route }) => {
    switch (route.key) {
      case 1:
        return <SmallMenu navigation={navigation} productData={productData} />;
      case 2:
        return (
          <RouteSmallMenu1 navigation={navigation} productData={productData} />
        );
      case 3:
        return (
          <RouteSmallMenu2 navigation={navigation} productData={productData} />
        );
      case 4:
        return (
          <RouteSmallMenu3 navigation={navigation} productData={productData} />
        );
      case 5:
        return (
          <RouteSmallMenu4 navigation={navigation} productData={productData} />
        );
      case 6:
        return (
          <RouteSmallMenu5 navigation={navigation} productData={productData} />
        );
      case 7:
        return (
          <RouteSmallMenu6 navigation={navigation} productData={productData} />
        );
      case 8:
        return (
          <RouteSmallMenu7 navigation={navigation} productData={productData} />
        );
      case 9:
        return (
          <RouteSmallMenu8 navigation={navigation} productData={productData} />
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Icon
          name="arrow-left"
          type="material-community"
          color={colors.cardBackground}
          size={25}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.text1}>Menu</Text>
      </View>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScreen}
        onIndexChange={setIndex}
        initialLayout={SCREEN_WIDTH}
        renderTabBar={renderTabBar}
        tabBarPosition="top"
        navigation={navigation}
        route={route}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: 0,
    left: 0,
    right: 0,
  },
  scene1: {
    flex: 1,
  },
  scene2: {
    backgroundColor: "#673ab7",
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
  },
  view2: {
    marginTop: 5,
    marginBottom: 20,
  },
  text1: {
    fontWeight: "bold",
    marginLeft: 40,
    color: colors.cardBackground,
    fontSize: 18,
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    // alignItems: "center",
  },
  tabContainer: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  tabLabel: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  tabStyle: {
    width: SCREEN_WIDTH / 2.5,
    maxHeight: 65,
  },
});
