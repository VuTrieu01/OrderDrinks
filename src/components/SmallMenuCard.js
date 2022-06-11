import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/styles";

export default function SmallMenuCard({ productName, price, image }) {
  return (
    <View style={styles.view1}>
      <View style={styles.view2}>
        <View style={styles.view3}>
          <Text style={styles.text1}>{productName}</Text>
          <Text style={styles.text3}>{price}</Text>
        </View>
        <View style={{ flex: 2 }}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  view1: {
    backgroundColor: colors.cardBackground,
    elevation: 4,
    shadowColor: colors.black,
    shadowOpacity: 0.4,
    margin: 5,
    padding: 10,
  },
  view2: {
    flex: 1,
    flexDirection: "row",
    padding: 0,
    justifyContent: "space-between",
  },
  view3: {
    flex: 6,
    justifyContent: "space-between",
  },
  text1: {
    fontSize: 15,
    color: colors.grey1,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    color: colors.grey3,
    marginRight: 2,
  },
  text3: {
    fontSize: 15,
    color: colors.black,
  },
  image: {
    flex: 1,
  },
});
