import { View, Text, StyleSheet, TextInput, Alert } from "react-native";
import React, { useState, useRef, useEffect, useContext } from "react";
import Header from "../../components/Header";
import { colors, parameters, title } from "../../global/styles";
import * as Animatable from "react-native-animatable";
import { Icon, Button, SocialIcon } from "@rneui/base";
import { Formik } from "formik";
import { auth } from "../../../firebase";
import { SignInContext } from "../../contexts/authContext";

export default function SignInScreen({ navigation }) {
  const { dispatchSignedIn } = useContext(SignInContext);

  const [textPassword, setTextPassword] = useState(false);

  const textEmailRef = useRef(1);
  const textPassRef = useRef(2);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatchSignedIn({
          type: "UPDATE_SIGN_IN",
          payload: { userToken: "signed-in" },
        });
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = (data) => {
    const { password, email } = data;
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Header title="ĐĂNG NHẬP" type="arrow-left" navigation={navigation} />
      <View style={{ alignItems: "center", marginVertical: 10 }}>
        <Text style={styles.text}>Vui lòng nhập email và mật khẩu</Text>
        <Text style={styles.text}>đã đăng ký với tài khoản của bạn</Text>
      </View>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {(props) => (
          <View>
            <View>
              <View>
                <TextInput
                  style={styles.txtIpEmail}
                  placeholder="Email"
                  ref={textEmailRef}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
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
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
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
                onPress={props.handleSubmit}
              />
            </View>
          </View>
        )}
      </Formik>
      <View style={{ alignItems: "center" }}>
        <Text style={{ ...styles.text, textDecorationLine: "underline" }}>
          Quên mật khẩu?
        </Text>
      </View>
      <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Hoặc</Text>
      </View>
      {/* <View>
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
      </View> */}
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 10,
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
    backgroundColor: colors.cardBackground,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#0C713D",
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  titleButton: {
    color: colors.buttons,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 3,
  },
});
