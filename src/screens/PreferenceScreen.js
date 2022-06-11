import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import { colors } from "../global/styles";
import { Icon, CheckBox } from "@rneui/base";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function PreferenceScreen({ navigation, route }) {
  const image = route.params.image;
  //   const { dink, price, image } = menuTra[props.route.params.index];
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Image
            style={styles.backgroundImage}
            source={{
              uri: image,
            }}
          />
        </View>

        {/* <View style={styles.bar}>
          <Text>Choose a preference</Text>
        </View> */}

        <View style={styles.view12}>
          <Icon
            name="arrow-left"
            type="material-community"
            color={colors.black}
            size={25}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>

        <View style={styles.view1}>
          <Text style={styles.text6}>{route.params.name}</Text>
          {/* <Text style={styles.text2}>Co the bo</Text> */}
        </View>

        <View style={styles.view2}>
          <Text style={styles.text10}>Chọn size</Text>
        </View>

        {/* Se su dung map o cho nay */}
        <View style={styles.view4}>
          <View style={styles.view5}>
            <View style={styles.view6}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor={colors.buttons}
              />
              <Text style={styles.text5}>S</Text>
            </View>

            <Text style={styles.text6}>{route.params.price}</Text>
          </View>
          <View style={styles.view5}>
            <View style={styles.view6}>
              <BouncyCheckbox
                iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
                fillColor={colors.buttons}
              />

              <Text style={styles.text5}>M</Text>
            </View>

            <Text style={styles.text6}>{route.params.price + 5000}</Text>
          </View>
        </View>

        {/* <View style={styles.view2}>
          <Text style={styles.text10}>Thêm Topping</Text>
        </View>

        <View style={styles.view4}>
          <View style={styles.view5}>
            <View style={styles.view6}>
            <BouncyCheckbox />

              <Text style={styles.text5}>Vải</Text>
            </View>

            <Text style={styles.text6}>{route.params.price}</Text>
          </View>
          <View style={styles.view5}>
            <View style={styles.view6}>
            <BouncyCheckbox />

              <Text style={styles.text5}>Đào</Text>
            </View>

            <Text style={styles.text6}>{route.params.price + 10}</Text>
          </View>
        </View> */}
        {/*Tam thoi de nhu nay */}
      </ScrollView>

      <View style={styles.view14}>
        <Text style={styles.text11}>Số lượng</Text>
      </View>

      <View style={styles.view14}>
        <View style={styles.view15}>
          <Icon
            name="remove"
            type="material"
            color={colors.black}
            size={25}
            onPress={() => {}}
          />
        </View>

        <Text style={styles.text9}>1</Text>

        <View style={styles.view16}>
          <Icon
            name="add"
            type="material"
            color={colors.black}
            size={25}
            onPress={() => {}}
          />
        </View>
      </View>

      <View style={styles.view17}>
        <View style={styles.view18}>
          <Text style={styles.text1}>Thêm vào giỏ hàng</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  fill: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  header: {
    width: "100%",
    backgroundColor: colors.buttons,
    overflow: "hidden",
    height: 180,
  },
  backgroundImage: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  bar: {
    backgroundColor: "transparent",
    marginTop: Platform.OS === "ios" ? 28 : 38,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
  },
  title: {
    color: colors.cardBackground,
    fontSize: 28,
    fontWeight: "bold",
    marginLeft: 40,
  },
  //   scrollViewContent: {
  //     paddingTop: Platform.OS === "ios" ? HEADER_MAX_HEIGHT : 0,
  //   },
  row: {
    height: 40,
    margin: 16,
    backgroundColor: colors.grey5,
    alignItems: "center",
    justifyContent: "center",
  },
  view1: {
    backgroundColor: colors.cardBackground,
    padding: 10,
    marginBottom: 10,
  },
  view2: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  view3: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },
  view4: {
    backgroundColor: colors.cardBackground,
    marginBottom: 15,
  },
  view5: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 10,
  },
  view6: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  view7: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  view8: {
    fontSize: 16,
    color: colors.grey1,
    fontWeight: "bold",
    marginLeft: 10,
  },
  view9: {
    borderWidth: 3,
    borderColor: colors.grey5,
    borderRadius: 5,
    marginRight: 10,
  },
  view10: {
    backgroundColor: colors.cardBackground,
    marginBottom: 15,
  },
  view11: {
    flexDirection: "row",
    alignItems: "center",
  },
  view12: {
    position: "absolute",
    top: 15,
    left: 15,
    backgroundColor: colors.cardBackground,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  view13: {
    paddingBottom: 0,
    marginTop: 5,
  },
  view14: {
    flexDirection: "row",
    backgroundColor: colors.cardBackground,
    paddingVertical: 5,
    marginBottom: 0,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
  },
  view15: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  view16: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: colors.lightGreen,
    justifyContent: "center",
    alignItems: "center",
  },
  view17: {
    backgroundColor: colors.cardBackground,
    alignItems: "center",
    padding: 10,
    marginTop: -5,
  },
  view18: {
    width: 320,
    borderRadius: 12,
    backgroundColor: colors.buttons,
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 0,
  },
  text1: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.cardBackground,
  },
  text2: {
    fontSize: 14,
    color: colors.grey2,
    marginTop: 5,
  },
  text3: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.grey1,
    marginLeft: 10,
  },
  text4: {
    fontWeight: "bold",
    color: colors.grey3,
    padding: 5,
  },
  text5: {
    fontWeight: "bold",
    marginLeft: -5,
  },
  text6: {
    fontSize: 16,
    fontWeight: "bold",
  },
  text7: {
    fontWeight: "bold",
    color: colors.grey3,
    padding: 5,
  },
  text8: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  text9: {
    fontWeight: "bold",
    fontSize: 18,
  },
  text10: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  text11: {
    paddingLeft: 10,
    fontWeight: "bold",
    fontSize: 18,
    color: colors.grey3,
  },
});
