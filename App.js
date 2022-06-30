import { LogBox, StatusBar, StyleSheet, Text, View } from "react-native";
import { SignInContextProvider } from "./src/contexts/authContext";
import { colors } from "./src/global/styles";
import RootNavigator from "./src/navigation/RootNavigator";

export default function App() {
  LogBox.ignoreLogs([
    "AsyncStorage has been extracted from react-native core and will be removed in a future release. It can now be installed and imported from '@react-native-async-storage/async-storage' instead of 'react-native'. See https://github.com/react-native-async-storage/async-storage",
  ]);
  LogBox.ignoreLogs([
    "Warning: Each child in a list should have a unique 'key' prop.%s%s See https://reactjs.org/link/warning-keys for more information.%s,",
  ]);
  return (
    <SignInContextProvider>
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor={colors.statusbar}
        />
        <RootNavigator />
      </View>
    </SignInContextProvider>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
