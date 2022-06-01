import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState, useRef } from "react";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Icon, Button, SocialIcon } from "@rneui/base";

export default function SignInScreen({ navigation }) {
  const [textPassword, setTextPassword] = useState(false);

  const textEmailRef = useRef(1);
  const textPassRef = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="TÀI KHOẢN" type="arrow-left" navigation={navigation} />
      <View>
        <Text style={title}>Đăng nhập</Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.text}>Vui lòng nhập email và mật khẩu</Text>
        <Text style={styles.text}>đã đăng ký với tài khoản của bạn</Text>
      </View>
      <View>
        <View>
          <TextInput
            style={styles.txtIpEmail}
            placeholder="Email"
            ref={textEmailRef}
          />
        </View>
        <View style={styles.txtIpPass}>
          <Animatable.View
            animation={textPassword ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="lock"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>

          <TextInput
            style={{ width: "80%" }}
            placeholder="Mật khẩu"
            ref={textPassRef}
            onFocus={() => {
              setTextPassword(false);
            }}
            onBlur={() => {
              setTextPassword(true);
            }}
          />

          <Animatable.View
            animation={textPassword ? "" : "fadeInLeft"}
            duration={400}
          >
            <Icon
              name="visibility-off"
              iconStyle={{ color: colors.grey3 }}
              type="material"
            />
          </Animatable.View>
        </View>
      </View>
      <View style={{ marginHorizontal: 20, marginVertical: 30 }}>
        <Button
          title="Đăng nhập"
          buttonStyle={parameters.styleButton}
          titleStyle={parameters.titleButton}
          onPress={() => {
            navigation.navigate("ClientTabs");
          }}
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
          Quên mật khẩu?
        </Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hoặc</Text>
      </View>
      <View>
        <SocialIcon
          title="Đăng nhập với Facebook"
          button
          type="facebook"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View>
        <SocialIcon
          title="Đăng nhập với Google"
          button
          type="google"
          style={styles.socialIcon}
          onPress={() => {}}
        />
      </View>
      <View
        style={{
          alignItems: "flex-end",
          marginHorizontal: 20,
          marginVertical: 10,
        }}
      >
        <Button
          title="Đăng kí"
          buttonStyle={styles.createButton}
          titleStyle={styles.titleButton}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: colors.grey4,
    fontSize: 16,
  },

  txtIpEmail: {
    borderWidth: 1,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  txtIpPass: {
    borderWidth: 1,
    borderColor: colors.grey3,
    marginHorizontal: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },

  socialIcon: {
    borderRadius: 12,
    height: 50,
    width: "91%",
    marginLeft: 20,
  },

  createButton: {
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0C713D",
    height: 40,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  titleButton: {
    color: "#0C713D",
    fontSize: 13,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },
});
