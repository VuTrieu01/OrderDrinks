import { StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../../global/styles";
import Header from "../../components/Header";
import { Formik } from "formik";
import { Icon, Button } from "@rneui/base";
import * as Animatable from "react-native-animatable";
import { auth } from "../../../firebase";

const initialValues = {
  phone_number: "",
  name: "",
  email: "",
  password: "",
  // password_again: "",
};

export default function SignUpScreen({ navigation }) {
  // const [pass, setPass] = useState(false)
  const [passFocus, setPassFocus] = useState(false);
  const [passBlur, setPassBlur] = useState(false);

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

  const handleSignUp = (data) => {
    const { password, email } = data;
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Registered in with: ", user.email);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <Header title="ĐĂNG KÝ" type="arrow-left" navigation={navigation} />
      <ScrollView keyboardShouldPersistTaps="always">
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => {
            handleSignUp(values);
          }}
        >
          {(props) => (
            <View style={styles.view2}>
              <View style={styles.view6}>
                <TextInput
                  placeholder="Số điện thoại"
                  style={styles.input1}
                  keyboardType="number-pad"
                  autoFocus={true}
                  onChangeText={props.handleChange("phone_number")}
                  value={props.values.phone_number}
                />
              </View>

              <View style={styles.view6}>
                <TextInput
                  placeholder="Họ và tên"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange("name")}
                  value={props.values.name}
                />
              </View>

              <View style={styles.view10}>
                <View>
                  <Icon
                    name="email"
                    style={styles.email}
                    color={colors.grey3}
                    type="material"
                  />
                </View>
                <TextInput
                  placeholder="Email"
                  style={styles.input1}
                  autoFocus={false}
                  onChangeText={props.handleChange("email")}
                  value={props.values.email}
                />
              </View>

              <View style={styles.view14}>
                <Animatable.View
                  animation={passFocus ? "fadeInRight" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="lock"
                    color={colors.grey3}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
                <TextInput
                  placeholder="Mật khẩu"
                  style={{ flex: 1, fontSize: 16 }}
                  autoFocus={false}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onFocus={() => {
                    setPassFocus(true);
                  }}
                  onBlur={() => {
                    setPassBlur(true);
                  }}
                />
                <Animatable.View
                  animation={passBlur ? "fadeInLeft" : "fadeInRight"}
                  duration={400}
                >
                  <Icon
                    name="visibility-off"
                    color={colors.grey3}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
              </View>

              {/* <View style={styles.view14}>
                <Animatable.View
                  animation={passFocus ? "fadeInRight" : "fadeInLeft"}
                  duration={400}
                >
                  <Icon
                    name="lock"
                    color={colors.grey3}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
                <TextInput
                  placeholder="Nhập lại mật khẩu"
                  style={{ flex: 1, fontSize: 16 }}
                  autoFocus={false}
                  onChangeText={props.handleChange("password")}
                  value={props.values.password}
                  onFocus={() => {
                    setPassFocus(true);
                  }}
                  onBlur={() => {
                    setPassBlur(true);
                  }}
                />
                <Animatable.View
                  animation={passBlur ? "fadeInLeft" : "fadeInRight"}
                  duration={400}
                >
                  <Icon
                    name="visibility-off"
                    color={colors.grey3}
                    type="material"
                    style={{ marginRight: 10 }}
                  />
                </Animatable.View>
              </View> */}

              {/* <View style={styles.view15}>
                <Text style={styles.text3}>
                  Bằng cách tạo hoặc đăng nhập vào một tài khoản bạn đang
                </Text>

                <View style={styles.view16}>
                  <Text style={styles.text3}>đồng ý với </Text>
                  <Text style={styles.text4}>Điều khoản & Điều kiện</Text>
                  <Text style={styles.text3}> và </Text>
                  <Text style={styles.text4}>Quyền riêng tư của chúng tôi</Text>
                </View>
              </View> */}

              <View style={styles.view17}>
                <Button
                  title="Tạo tài khoản"
                  buttonStyle={styles.button1}
                  titleStyle={styles.title1}
                  onPress={props.handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>

        <View style={styles.view18}>
          <Text style={styles.text5}>Hoặc</Text>
        </View>
        <View style={styles.view19}>
          <View style={styles.view20}>
            <Text style={styles.text6}>Đã có tài khoản OrderDrinks</Text>
          </View>
          <View style={styles.view22}>
            <Button
              title="Đăng nhập"
              buttonStyle={styles.button2}
              titleStyle={styles.title2}
              onPress={() => {
                navigation.navigate("SignInScreen");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.cardBackground,
  },
  view1: {
    justifyContent: "center",
    alignItems: "flex-start",
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 15,
  },
  view2: {
    justifyContent: "flex-start",
    backgroundColor: colors.cardBackground,
    paddingHorizontal: 15,
  },
  view3: {
    marginTop: 5,
    marginBottom: 10,
  },
  view4: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
  },
  view5: {
    marginLeft: 30,
    maxWidth: "65%",
  },
  view6: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 30,
    height: 48,
  },
  view7: {
    marginLeft: 0,
    maxWidth: "65%",
  },
  view8: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 20,
    height: 48,
  },
  view9: {
    marginLeft: 0,
    maxWidth: "65%",
  },
  view10: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 30,
    height: 48,
  },
  view11: {
    marginLeft: 30,
    maxWidth: "65%",
  },
  view13: {
    flexDirection: "row",
    height: 40,
  },
  view14: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: colors.grey4,
    borderRadius: 12,
    paddingLeft: 5,
    marginTop: 30,
    justifyContent: "space-between",
    alignContent: "center",
    alignItems: "center",
    height: 48,
  },
  view15: {
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  view16: {
    flexDirection: "row",
  },
  view17: {
    marginVertical: 10,
    marginTop: 30,
  },
  view18: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  view19: {
    backgroundColor: colors.cardBackground,
    paddingHorizontal: 15,
  },
  view20: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 5,
  },
  view21: {
    marginTop: 5,
    alignItems: "flex-end",
  },
  view22: {
    marginVertical: 10,
    marginTop: 15,
  },
  text1: {
    fontSize: 22,
    color: colors.buttons,
    fontWeight: "bold",
  },
  text2: {
    fontSize: 15,
    color: colors.grey2,
  },
  text3: {
    fontSize: 13,
  },
  text4: {
    textDecorationLine: "underline",
    fontSize: 13,
    color: colors.buttons,
  },
  text5: {
    fontSize: 15,
    fontWeight: "bold",
  },
  text6: {
    fontSize: 15,
  },
  input1: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  input2: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 0,
  },
  input3: {
    fontSize: 16,
    marginLeft: 0,
    marginBottom: 0,
  },
  input4: {
    fontSize: 16,
    marginLeft: -20,
    marginBottom: -10,
  },
  email: {
    fontSize: 24,
    padding: 0,
    marginLeft: 2,
    marginBottom: 0,
    marginTop: 11,
  },
  button1: {
    backgroundColor: colors.buttons,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  button2: {
    backgroundColor: colors.cardBackground,
    alignContent: "center",
    justifyContent: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.buttons,
    height: 50,
    paddingHorizontal: 20,
    width: "100%",
  },
  title1: {
    color: colors.cardBackground,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
  title2: {
    color: colors.buttons,
    fontSize: 20,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -3,
  },
});
