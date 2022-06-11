import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";
import ProductCard from "./ProductCard";

export default function SearchResultCard({
  onPressShopCard,
  name,
  numberOfReview,
  address,
  farAway,
  averageReviews,
  image_url,
  productData,
}) {
  return (
    <View>
      <TouchableOpacity onPress={onPressShopCard}>
        <View style={styles.view1}>
          <View style={{ height: 150 }}>
            <ImageBackground
              style={{ height: 160 }}
              source={{ uri: image_url }}
              imageStyle={styles.imageStyle}
            />

            <View style={styles.image}>
              <Text style={styles.text1}>{averageReviews}</Text>
              <Text style={styles.text2}>{numberOfReview} reviews</Text>
            </View>
          </View>

          <View style={styles.view3}>
            <View style={{ paddingTop: 5 }}>
              <Text style={styles.text5}>{name}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={styles.view4}>
                <Icon
                  name="place"
                  type="material"
                  color={colors.cardComment}
                  size={18}
                  iconStyle={{ marginTop: 3, marginLeft: -5 }}
                />

                <Text style={styles.view5}>{farAway} Min</Text>
              </View>

              <View style={{ flex: 9 }}>
                <Text style={styles.text6}>{address}</Text>
              </View>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <View style={{ marginTop: 5, paddingBottom: 20 }}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={productData}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <ProductCard
              key={index}
              image={item.image}
              productName={item.name}
              price={item.price}
            />
          )}
          horizontal={true}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  view2: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
  },
  view3: {
    flexDirection: "column",
    marginHorizontal: 5,
    marginBottom: 10,
    marginLeft: 0,
    marginTop: 5,
  },
  view4: {
    flex: 4,
    flexDirection: "row",
    borderRightWidth: 1,
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
  },
  view5: {
    fontSize: 12,
    fontWeight: "bold",
    paddingTop: 5,
    color: colors.grey3,
  },
  image: {
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "rgba(52,52,52,0.4)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  imageStyle: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
  },
  text1: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  text2: {
    color: "white",
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
  text3: {
    color: colors.grey2,
    fontSize: 10,
    fontWeight: "bold",
  },
  text4: {
    color: colors.grey2,
    fontSize: 10,
    fontWeight: "bold",
  },
  text5: {
    color: colors.grey1,
    fontSize: 17,
    fontWeight: "bold",
  },
  text6: {
    color: colors.grey2,
    fontSize: 12,
    paddingTop: 5,
    paddingHorizontal: 10,
  },
});
