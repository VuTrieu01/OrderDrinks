import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React from "react";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";

export default function FoodCard({
  onPressFoodCard,
  name,
  deliveryAvailable,
  discountAvailable,
  discountPercent,
  numberOfReview,
  address,
  farAway,
  averageReviews,
  image_url,
  screenWidth,
}) {
  return (
    <TouchableOpacity>
      <View style={{ ...styles.cardView, width: screenWidth }}>
        <Image
          style={{ ...styles.image, width: screenWidth }}
          source={{ uri: image_url }}
        />

        <View>
          <View>
            <Text style={styles.name}>{name}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: "row" }}>
            <View style={styles.distance}>
              <Icon
                name="place"
                type="material"
                color={colors.grey2}
                size={18}
                iconStyle={{
                  marginTop: 3,
                }}
              />
              <Text style={styles.min}>{farAway} Min</Text>
            </View>

            <View style={{ flex: 9, flexDirection: "row" }}>
              <Text style={styles.address}>{address}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.review}>
        <Text style={styles.average}>{averageReviews}</Text>
        <Text style={styles.numberOfReview}>{numberOfReview} reviews</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardView: {
    marginHorizontal: 9,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    borderWidth: 1,
    borderColor: colors.grey4,
    borderBottomRightRadius: 5,
    borderBottomLeftRadius: 5,
  },
  image: {
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
    height: 150,
  },
  name: {
    fontSize: 17,
    fontWeight: "bold",
    color: colors.grey1,
    marginTop: 5,
    marginLeft: 10,
  },
  distance: {
    flex: 4,
    flexDirection: "row",
    borderRightColor: colors.grey4,
    paddingHorizontal: 5,
    borderRightWidth: 1,
  },
  min: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.grey3,
    paddingTop: 5,
  },
  address: {
    fontSize: 12,
    paddingHorizontal: 10,
    color: colors.grey2,
    paddingTop: 5,
  },
  review: {
    position: "absolute",
    top: 0,
    right: 10,
    backgroundColor: "rgba(52,52,52,0.5)",
    padding: 2,
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 12,
  },
  average: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: -3,
  },
  numberOfReview: {
    color: "white",
    fontSize: 13,
    marginRight: 0,
    marginLeft: 0,
  },
});
