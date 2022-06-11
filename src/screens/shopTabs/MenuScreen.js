import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { colors } from "../../global/styles";

export default function MenuScreen({
  navigation,
  drinkItem,
  productData,
  name,
  location,
  courier,
}) {
  let type = [];
  for (let i = 0; i < drinkItem.length; i++) {
    const menuPressed = () => {
      navigation.navigate("InfoMenu", {
        drinkItem: drinkItem[i],
        productData: productData,
        name: name,
        location: location,
        courier: courier,
      });
    };
    type.push(
      <View style={styles.view1}>
        <TouchableOpacity onPress={menuPressed}>
          <View style={styles.view2}>
            <Text style={styles.text1}>{drinkItem[i]}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* <View>
        {specialData.map((item, index) => (
          <View key={index} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Icon
                  name="star"
                  type="material-community"
                  color={colors.yellow}
                />
                <Text style={styles.text1}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View> */}

      <View>{type}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    padding: 10,
    borderBottomColor: colors.grey5,
  },
  text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.grey3,
  },
});
