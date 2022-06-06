import {
  View,
  Text,
  FlatList,
  TouchableWithoutFeedback,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import SearchBar from "../components/SearchBar";
import { filterData } from "../global/data";
import { colors } from "../global/styles";

const SCREEN_WIDTH = Dimensions.get("window").width;

export default function SearchScreen({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <SearchBar />
      <View style={{ marginTop: 10, marginBottom: 60 }}>
        <FlatList
          style={{ marginBottom: 1 }}
          data={filterData}
          keyExtractor={(_, index) => index}
          renderItem={({ item, index }) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => {
                navigation.navigate("SearchResultScreen", {
                  item: item.text,
                });
              }}
            >
              <View style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{ uri: item.image_url }}
                >
                  <View style={styles.textView}>
                    <Text
                      style={{
                        color: colors.cardBackground,
                        fontWeight: "bold",
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            </TouchableWithoutFeedback>
          )}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          ListHeaderComponent={<Text style={styles.listHeader}>Danh mục</Text>}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageView: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    marginLeft: SCREEN_WIDTH * 0.035,
    marginBottom: SCREEN_WIDTH * 0.035,
  },
  image: {
    borderRadius: 10,
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
  },
  listHeader: {
    fontSize: 16,
    color: colors.grey2,
    paddingBottom: 10,
    marginLeft: 12,
  },
  textView: {
    width: SCREEN_WIDTH * 0.4475,
    height: SCREEN_WIDTH * 0.4475,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52,52,52,0.3)",
  },
});
