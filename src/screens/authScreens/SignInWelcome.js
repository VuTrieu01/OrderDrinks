import { View, Text, StyleSheet, Image } from "react-native";
import React, { useEffect, useContext } from "react";
import { colors, parameters } from "../../global/styles";
import Swiper from "react-native-swiper";
import { Button } from "@rneui/base";
import { SignInContext } from "../../contexts/authContext";
import { auth } from "../../../firebase";

export default function SignInWelcome({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });
      } else {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: null },
        });
      }
    });

    return unsubscribe;
  }, []);

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          flex: 3,
          justifyContent: "flex-start",
          alignItems: "center",
          paddingTop: 20,
        }}
      >
        <Text
          style={{ fontSize: 26, color: colors.buttons, fontWeight: "bold" }}
        >
          ORDER DRINKS
        </Text>
      </View>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Swiper autoplay={true}>
          <View style={styles.slide1}>
            <Image
              source={{
                uri: "https://media.foody.vn/res/g113/1125358/prof/s/foody-upload-api-foody-mobile-fo-f2033367-220112164217.jpeg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide2}>
            <Image
              source={{
                uri: "https://th.bing.com/th/id/R.41153ed0c808b119a581da729844671e?rik=Ed1%2fhbPDdZy0DA&pid=ImgRaw&r=0",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
          <View style={styles.slide3}>
            <Image
              source={{
                uri: "https://thuvien.hocviennhiepanh.com/wp-content/uploads/Tip7_f4.jpg",
              }}
              style={{ height: "100%", width: "100%" }}
            />
          </View>
        </Swiper>
      </View>
      <View
        style={{ flex: 4, justifyContent: "flex-end", marginHorizontal: 20 }}
      >
        <View style={{ marginHorizontal: 20, marginVertical: 20 }}>
          <Button
            title="Đăng nhập"
            buttonStyle={parameters.styleButton}
            titleStyle={parameters.titleButton}
            onPress={() => {
              navigation.navigate("SignInScreen");
            }}
          />
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 40,
          marginBottom: 30,
        }}
      >
        <Button
          title="Đăng kí"
          buttonStyle={styles.createButton}
          titleStyle={styles.titleButton}
          onPress={() => {
            navigation.navigate("SignUpScreen");
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0C713D",
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  titleButton: {
    color: "#0C713D",
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },
});
