import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import ShopHeader from "../components/ShopHeader";
import { localItem } from "../global/data";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";
import { TabBar, TabView } from "react-native-tab-view";
import MenuScreen from "./shopTabs/MenuScreen";

const SCREEN_WIDTH = Dimensions.get("window").width;
const initialLayout = SCREEN_WIDTH;

export default function InfoShopScreen({ navigation, route }) {
  const { id, name } = route.params;

  //routes Main
  const [routes] = useState([
    { key: "first", title: "MENU" },
    { key: "second", title: "INFO" },
    { key: "third", title: "REVIEWS" },
    { key: "fourth", title: "GALLERY" },
  ]);

  const [index, setIndex] = useState(0);

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

  const UpdateRoute1 = () => {
    return <View></View>;
  };

  const menuPressed = () => {
    navigation.navigate("MenuProduct");
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <ShopHeader id={id} navigation={navigation} />
          {localItem[id].discount && (
            <View style={styles.view1}>
              <Text style={styles.text1}>
                GET {localItem[id].discount} % OFF ON FOOD TOTAL
              </Text>
            </View>
          )}

          <View style={styles.view2}>
            <View style={styles.view3}>
              <Text style={styles.text2}>{localItem[id].name}</Text>
              <Text style={styles.text3}>{localItem[id].foodType}</Text>

              <View style={styles.view4}>
                <Icon
                  name="star"
                  type="material-community"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text4}>{localItem[id].averageReviews}</Text>
                <Text style={styles.text5}>
                  ({localItem[id].numberOfReview}+)
                </Text>
                <Icon
                  name="map-marker"
                  type="material-community"
                  color={colors.grey3}
                  size={15}
                />
                <Text style={styles.text5}>{localItem[id].farAway} away</Text>
              </View>
            </View>

            <View style={styles.view5}>
              <Text style={styles.view6}>Collect</Text>
              <View style={styles.view7}>
                <Text style={styles.text7}>{localItem[id].collectTime}</Text>
                <Text style={styles.text8}>min</Text>
              </View>
            </View>

            <View style={styles.view8}>
              <Text style={styles.text6}>Delivery</Text>
              <View style={styles.view9}>
                <Text style={styles.text9}>{localItem[id].deliveryTime}</Text>
                <Text style={styles.text11}>min</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.view10}>
          <TabView
            navigationState={{ index, routes }}
            renderScene={UpdateRoute1}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            renderTabBar={renderTabBar}
            tabBarPosition="top"
          />
        </View>

        {index === 0 && <MenuScreen onPress={menuPressed} />}
      </ScrollView>

      <TouchableOpacity>
        <View style={styles.view11}>
          <View style={styles.view12}>
            <Text style={styles.text13}>Xem giỏ hàng</Text>
            <View style={styles.view13}>
              <Text style={styles.text13}>0</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    width: "100%",
    padding: 3,
    alignItems: "center",
    justifyContent: "center",
  },
  view2: {
    flexDirection: "row",
    flex: 1,
    marginBottom: 5,
    marginHorizontal: 10,
    justifyContent: "space-between",
  },
  view3: {
    flex: 8,
  },
  view4: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  view5: {
    flex: 3,
    alignItems: "center",
  },
  view6: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.grey1,
  },
  view7: {
    width: 40,
    height: 40,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-around",
  },
  view8: {
    flex: 3,
    alignItems: "center",
  },
  view9: {
    width: 40,
    height: 40,
    backgroundColor: colors.buttons,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-around",
  },
  view10: {
    elevation: 10,
    backgroundColor: colors.cardBackground,
  },
  view11: {
    height: 50,
    backgroundColor: colors.buttons,
    alignContent: "center",
    justifyContent: "center",
    marginBottom: 0,
    paddingHorizontal: 10,
  },
  view12: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view13: {
    borderWidth: 1,
    borderColor: colors.cardBackground,
    borderRadius: 6,
    paddingBottom: 2,
  },
  view14: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: colors.buttons,
    top: 0,
    left: 0,
    right: 0,
  },
  view15: {
    marginTop: 5,
    marginBottom: 20,
  },
  text1: {
    color: colors.lightGreen,
    fontSize: 14,
    fontWeight: "bold",
  },
  text2: {
    color: colors.grey1,
    fontSize: 20,
    fontWeight: "bold",
  },
  text3: {
    color: colors.grey3,
    fontSize: 15,
  },
  text4: {
    // fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
  },
  text5: {
    // fontFamily: fonts.android.bold,
    fontSize: 13,
    color: colors.grey3,
    marginLeft: 2,
    marginRight: 5,
  },
  text6: {
    // fontFamily: fonts.android.bold,
    fontWeight: "bold",
    fontSize: 15,
    color: colors.black,
    marginLeft: 0,
  },
  text7: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.black,
    marginTop: 5,
  },
  text8: {
    fontSize: 13,
    color: colors.black,
    marginBottom: 5,
  },
  text9: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  text10: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.cardBackground,
    marginTop: 5,
  },
  text11: {
    fontSize: 13,
    color: colors.cardBackground,
    marginBottom: 5,
  },
  text12: {
    padding: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.cardBackground,
  },
  text13: {
    paddingHorizontal: 3,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.cardBackground,
  },
  text14: {
    fontWeight: "bold",
    marginLeft: 40,
    color: colors.cardBackground,
    fontSize: 18,
  },
  tab: {
    paddingTop: 0,
    backgroundColor: colors.buttons,
    justifyContent: "space-between",
    alignItems: "center",
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
    width: SCREEN_WIDTH / 4,
    maxHeight: 45,
  },
});
