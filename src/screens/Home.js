import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  Pressable,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HeaderTabs from "../components/HeaderTabs";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import RestaurantItem, { localRestaurants } from "../components/RestaurantItem";
import { Icon } from "@rneui/base";
import HomeHeader from "../components/HomeHeader";
import { colors } from "../global/styles";
import { filterData, localItem } from "../global/data";
import FoodCard from "../components/FoodCard";
import CountDown from "react-native-countdown-component";

// const YELP_API_KEY = "";
const SCREEN_WIDTH = Dimensions.get("window").width;

export default function Home({ navigation }) {
  const [activeTab, setActiveTab] = useState("Delivery");
  const [indexCheck, setIndexCheck] = useState(0);
  return (
    <View style={styles.container}>
      <HomeHeader navigation={navigation} />
      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginVertical: 10,
        }}
      >
        <HeaderButton
          text="Delivery"
          btnColor={colors.buttons}
          textColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <HeaderButton
          text="Pickup"
          btnColor="white"
          textColor={colors.buttons}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          navigation={navigation}
        />
      </View>
      <ScrollView>
        <View style={styles.filterView}>
          <View style={styles.addressView}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Icon
                type="material-community"
                name="map-marker"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Sai gon hom nay mua</Text>
            </View>
            <View style={styles.clockView}>
              <Icon
                type="material-community"
                name="clock-time-four"
                color={colors.grey1}
                size={26}
              />
              <Text style={{ marginLeft: 5 }}>Bây giờ</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 20,
            }}
          >
            <Icon
              type="material-community"
              name="tune"
              color={colors.grey1}
              size={26}
            />
          </View>
        </View>

        <View style={styles.categoriesView}>
          <Text style={styles.categoriesText}>Loại</Text>
        </View>

        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={filterData}
            keyExtractor={(_, index) => index}
            extraData={indexCheck}
            renderItem={({ item, index }) => (
              <Pressable
                onPress={() => {
                  setIndexCheck(index);
                }}
              >
                <View
                  style={
                    indexCheck === index
                      ? { ...styles.smallCardSelected }
                      : { ...styles.smallCard }
                  }
                >
                  <Image
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 30,
                      backgroundColor: colors.cardBackground,
                    }}
                    source={item.image}
                  />
                  <View>
                    <Text
                      style={
                        indexCheck === index
                          ? { ...styles.smallCardTextSelected }
                          : { ...styles.smallCardText }
                      }
                    >
                      {item.text}
                    </Text>
                  </View>
                </View>
              </Pressable>
            )}
          />
        </View>

        <View style={styles.categoriesView}>
          <Text style={styles.categoriesText}>Giao hàng miễn phí</Text>
        </View>
        <View>
          <View
            style={{ flexDirection: "row", alignItems: "center", marginTop: 5 }}
          >
            <Text
              style={{ marginHorizontal: 10, fontWeight: "bold", fontSize: 15 }}
            >
              Tùy chọn thay đổi trong
            </Text>
            <CountDown
              until={3600}
              size={15}
              digitStyle={{ backgroundColor: colors.lightGreen }}
              digitTxtStyle={{ color: colors.cardBackground }}
              timeToShow={["M", "S"]}
              timeLabels={{ m: "Min", s: "Sec" }}
            />
          </View>

          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={localItem}
            keyExtractor={(_, index) => index}
            renderItem={({ item, index }) => (
              <View key={index}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image_url={item.image_url}
                  name={item.name}
                  farAway={item.farAway}
                  address={item.address}
                  averageReviews={item.averageReviews}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.categoriesView}>
          <Text style={styles.categoriesText}>Chương trình khuyến mãi</Text>
        </View>
        <View>
          <FlatList
            style={{ marginTop: 10, marginBottom: 10 }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={localItem}
            keyExtractor={(_, index) => index}
            renderItem={({ item, index }) => (
              <View key={index}>
                <FoodCard
                  screenWidth={SCREEN_WIDTH * 0.8}
                  image_url={item.image_url}
                  name={item.name}
                  farAway={item.farAway}
                  address={item.address}
                  averageReviews={item.averageReviews}
                  numberOfReview={item.numberOfReview}
                />
              </View>
            )}
          />
        </View>

        <View style={styles.categoriesView}>
          <Text style={styles.categoriesText}>Khu vực của bạn</Text>
        </View>
        <View style={{ width: SCREEN_WIDTH, paddingTop: 10 }}>
          {localItem.map((item, index) => (
            <View key={index} style={{ paddingBottom: 20 }}>
              <FoodCard
                screenWidth={SCREEN_WIDTH * 0.95}
                image_url={item.image_url}
                name={item.name}
                farAway={item.farAway}
                address={item.address}
                averageReviews={item.averageReviews}
                numberOfReview={item.numberOfReview}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      {activeTab === "Delivery" ? (
        <View style={styles.floatButton}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("MapScreen");
            }}
          >
            <Icon name="place" type="material" size={32} color={colors.red} />
            <Text style={{ color: colors.grey2 }}>Bản đồ</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  filterView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginHorizontal: 20,
    marginBottom: 10,
  },
  addressView: {
    flexDirection: "row",
    backgroundColor: colors.grey5,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  clockView: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 20,
    backgroundColor: colors.cardBackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    marginRight: 20,
  },
  categoriesText: {
    color: colors.grey1,
    fontSize: 22,
    fontWeight: "bold",
    paddingLeft: 20,
  },
  categoriesView: {
    backgroundColor: colors.grey5,
    justifyContent: "center",
    paddingVertical: 5,
  },
  smallCard: {
    borderRadius: 30,
    backgroundColor: colors.grey5,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardSelected: {
    borderRadius: 30,
    backgroundColor: colors.buttons,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 80,
    margin: 10,
    height: 100,
  },
  smallCardTextSelected: {
    fontWeight: "bold",
    color: colors.cardBackground,
  },
  smallCardText: {
    fontWeight: "bold",
    color: colors.grey2,
  },

  floatButton: {
    position: "absolute",
    bottom: 10,
    right: 15,
    backgroundColor: colors.cardBackground,
    elevation: 10,
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: "center",
  },
});

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor:
        props.activeTab === props.text ? colors.buttons : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => {
      props.setActiveTab(props.text);
      props.text === "Pickup" ? props.navigation.navigate("MapScreen") : "";
    }}
  >
    <Text
      style={{
        color: props.activeTab === props.text ? "white" : colors.buttons,
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {props.text}
    </Text>
  </TouchableOpacity>
);
