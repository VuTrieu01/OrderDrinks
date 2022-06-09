import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../../global/styles";
import { menuData, specialData } from "../../global/data";
import { Icon } from "@rneui/base";

export default function MenuScreen({ navigation, shop, onPress }) {
  return (
    <View style={styles.container}>
      <View>
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
      </View>

      <View>
        {menuData.map((item, index) => (
          <View key={index} style={styles.view1}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.view2}>
                <Text style={styles.text1}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
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
