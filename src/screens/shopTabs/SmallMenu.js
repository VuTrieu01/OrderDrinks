import { StyleSheet, View, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import SmallMenuCard from "../../components/SmallMenuCard";
import { colors } from "../../global/styles";

export default function SmallMenu({ navigation, productData }) {
  const itemList = productData.filter((item) => item.type.includes("Trà"));

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

export const RouteSmallMenu1 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Sữa chua"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export const RouteSmallMenu2 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Cà phê"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export const RouteSmallMenu3 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Latte đá"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export const RouteSmallMenu4 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Đá xay"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export const RouteSmallMenu5 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Kem"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export const RouteSmallMenu6 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) =>
    item.type.includes("Nước ngọt")
  );
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export const RouteSmallMenu7 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Sinh tố"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
export const RouteSmallMenu8 = ({ navigation, productData }) => {
  const itemList = productData.filter((item) => item.type.includes("Nước ép"));
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={itemList}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("PreferenceScreen", {
                  name: item.name,
                  price: item.price,
                  image: item.image,
                });
              }}
            >
              <SmallMenuCard
                key={index}
                image={item.image}
                productName={item.name}
                price={item.price}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

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
