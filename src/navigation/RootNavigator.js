import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { SignInContext } from "../contexts/authContext";
import AppStack from "./appStack";

export default function RootNavigator() {
  const { signedIn } = useContext(SignInContext);
  return (
    <NavigationContainer>
      {signedIn.userToken !== "signed-in" ? <AuthStack /> : <AppStack />}
    </NavigationContainer>
  );
}
