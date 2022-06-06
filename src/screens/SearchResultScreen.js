import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import SearchResultCard from "../components/SearchResultCard";
import { localItem } from "../global/data";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SearchResultScreen({ navigation, route }) {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          style={{ backgroundColor: colors.cardBackground }}
          data={localItem}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <SearchResultCard
              key={index}
              screenWidth={SCREEN_WIDTH}
              image_url={item.image_url}
              averageReviews={item.averageReviews}
              numberOfReview={item.numberOfReview}
              name={item.name}
              farAway={item.farAway}
              address={item.address}
              productData={item.productData}
              onPressShopCard={() => {
                navigation.navigate("InfoShopScreen", {
                  id: index,
                  name: item.name,
                });
              }}
            />
          )}
          ListHeaderComponent={
            <View
              style={{
                backgroundColor: colors.cardBackground,
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 5,
              }}
            >
              <Icon
                type="material-community"
                name="arrow-left"
                color={colors.cardBackground}
                size={25}
                backgroundColor={colors.buttons}
                style={{ borderRadius: 20, padding: 1 }}
                onPress={() => {
                  navigation.goBack();
                }}
              />
              <Text style={styles.listHeader}>
                {localItem.length} kết quả cho {route.params.item}
              </Text>
            </View>
          }
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listHeader: {
    color: colors.grey1,
    fontSize: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontWeight: "bold",
  },
});
