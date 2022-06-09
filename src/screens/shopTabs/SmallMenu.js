import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import SmallMenuCard from "../../components/SmallMenuCard";
import { colors } from "../../global/styles";
import { localItem } from "../../global/data";

export default function SmallMenu() {
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={localItem}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <FlatList
              key={index}
              style={{ backgroundColor: colors.cardBackground }}
              data={item.productData}
              keyExtractor={(_, index) => index}
              renderItem={({ item, index }) => (
                <TouchableOpacity>
                  <SmallMenuCard
                    key={index}
                    image={item.image}
                    productName={item.name}
                    price={item.price}
                    productDetails={item.details}
                  />
                </TouchableOpacity>
              )}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export const RouteSmallMenu1 = () => <View style={styles.scene1} />;
export const RouteSmallMenu2 = () => <View style={styles.scene1} />;
export const RouteSmallMenu3 = () => <View style={styles.scene1} />;
export const RouteSmallMenu4 = () => <View style={styles.scene1} />;
export const RouteSmallMenu5 = () => <View style={styles.scene1} />;
export const RouteSmallMenu6 = () => <View style={styles.scene1} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene1: {
    flex: 1,
    backgroundColor: "#673ab7",
  },
  scene2: {
    backgroundColor: "#673ab7",
  },
  view: {
    marginTop: 5,
    paddingBottom: 20,
  },
});
