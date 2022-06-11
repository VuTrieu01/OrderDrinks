import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";
import { icons, COLORS, SIZES, FONTS } from "../constants";
import Swiper from "react-native-swiper";

export default function InfoMenu({ navigation, route }) {
  const [orderItems, setOrderItems] = useState([]);

  const productData = route.params.productData;
  const itemList = productData.filter((item) =>
    item.type.includes(route.params.drinkItem)
  );

  function editOrder(action, menuId, price) {
    let orderList = orderItems.slice();
    let item = orderList.filter((a) => a.menuId == menuId);

    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1;
        item[0].qty = newQty;
        item[0].total = item[0].qty * price;
      } else {
        const newItem = {
          menuId: menuId,
          qty: 1,
          price: price,
          total: price,
        };
        orderList.push(newItem);
      }

      setOrderItems(orderList);
    } else {
      if (item.length > 0) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty - 1;
          item[0].qty = newQty;
          item[0].total = newQty * price;
        }
      }

      setOrderItems(orderList);
    }
  }

  function getOrderQty(menuId) {
    let orderItem = orderItems.filter((a) => a.menuId == menuId);

    if (orderItem.length > 0) {
      return orderItem[0].qty;
    }

    return 0;
  }

  function getBasketItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0);

    return itemCount;
  }

  function sumOrder() {
    let total = orderItems.reduce((a, b) => a + (b.total || 0), 0);

    return total;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view1}>
        <View style={styles.view2}>
          <Icon
            name="arrow-left"
            type="material-community"
            color={colors.black}
            size={25}
            onPress={() => navigation.goBack()}
          />
        </View>
        <View>
          <Text style={styles.text1}>{route.params.name}</Text>
        </View>

        <View style={styles.view3}></View>
      </View>

      <Swiper activeDotColor={colors.buttons}>
        {itemList.map((item, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <View style={{ height: SIZES.height * 0.35 }}>
              {/* food image*/}
              <Image
                source={{ uri: item.image }}
                resizeMode="cover"
                style={{
                  width: SIZES.width,
                  height: "100%",
                }}
              />

              {/* quantity */}
              <View
                style={{
                  position: "absolute",
                  bottom: -20,
                  width: SIZES.width,
                  height: 50,
                  justifyContent: "center",
                  flexDirection: "row",
                }}
              >
                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopLeftRadius: 25,
                    borderBottomLeftRadius: 25,
                  }}
                  onPress={() => editOrder("-", index, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>-</Text>
                </TouchableOpacity>

                <View
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text style={{ ...FONTS.h2 }}>{getOrderQty(index)}</Text>
                </View>

                <TouchableOpacity
                  style={{
                    width: 50,
                    backgroundColor: COLORS.white,
                    alignItems: "center",
                    justifyContent: "center",
                    borderTopRightRadius: 25,
                    borderBottomRightRadius: 25,
                  }}
                  onPress={() => editOrder("+", index, item.price)}
                >
                  <Text style={{ ...FONTS.body1 }}>+</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Name */}
            <View
              style={{
                width: SIZES.width,
                alignItems: "center",
                marginTop: 15,
                paddingHorizontal: SIZES.padding * 2,
              }}
            >
              <Text
                style={{ marginVertical: 10, textAlign: "center", ...FONTS.h2 }}
              >
                {item.name} - {item.price} VNĐ
              </Text>
            </View>
          </View>
        ))}
      </Swiper>

      {/*Order*/}
      <View
        style={{
          backgroundColor: COLORS.white,
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
            borderBottomColor: COLORS.lightGray2,
            borderBottomWidth: 1,
          }}
        >
          <Text style={{ ...FONTS.h3 }}>
            {getBasketItemCount()} món trong giỏ hàng
          </Text>
          <Text style={{ ...FONTS.h3 }}>{sumOrder()} VNĐ</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingVertical: SIZES.padding * 2,
            paddingHorizontal: SIZES.padding * 3,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.pin}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>
              Địa điểm
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <Image
              source={icons.master_card}
              resizeMode="contain"
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.darkgray,
              }}
            />
            <Text style={{ marginLeft: SIZES.padding, ...FONTS.h4 }}>8888</Text>
          </View>
        </View>

        {/* Order Button*/}
        <View
          style={{
            padding: SIZES.padding * 2,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: SIZES.width * 0.9,
              padding: SIZES.padding,
              backgroundColor: COLORS.primary,
              alignItems: "center",
              borderRadius: SIZES.radius,
            }}
            onPress={() =>
              navigation.navigate("OrderDelivery", {
                location: route.params.location,
                courier: route.params.courier,
                name: route.params.name,
              })
            }
          >
            <Text style={{ color: COLORS.white, ...FONTS.h2 }}>Đặt món</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view2: {
    margin: 10,
    width: 40,
    height: 40,
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  view3: {
    width: 40,
    height: 40,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
