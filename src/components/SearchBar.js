import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useState, useRef } from "react";
import { colors } from "../global/styles";
import { Icon } from "@rneui/base";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { filterData } from "../global/data";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import Ionicons from "react-native-vector-icons/Ionicons";
// import AntDesign from "react-native-vector-icons/AntDesign";

export default function SearchBar() {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
  const [textInputFocussed, setTextInputFocussed] = useState(true);
  const textInput = useRef(0);
  const [data, setData] = useState([...filterData]);

  return (
    <View style={{ alignItems: "center" }}>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.searchArea}>
          <Icon
            name="search"
            style={styles.searchIcon}
            type="material"
            iconStyle={{ marginLeft: 5 }}
            size={32}
          />
          <Text style={{ fontSize: 15 }}>Bạn đang tìm kiếm gì?</Text>
        </View>
      </TouchableWithoutFeedback>

      <Modal animationType="fade" transparent={false} visible={modalVisible}>
        <View style={styles.modal}>
          <View style={styles.view1}>
            <View style={styles.textInput}>
              <Animatable.View>
                <Icon
                  name={textInputFocussed ? "arrow-back" : "search"}
                  onPress={() => {
                    if (textInputFocussed) setModalVisible(false);
                    setTextInputFocussed(false);
                  }}
                  style={styles.icon}
                  type="material"
                  iconStyle={{ marginRight: 5 }}
                />
              </Animatable.View>
              <TextInput
                style={{ width: "90%", paddingVertical: 10 }}
                placeholder=""
                autoFocus={false}
                ref={textInput}
              />

              <Animatable.View>
                <Icon
                  name={textInputFocussed ? "cancel" : null}
                  onPress={() => {
                    textInput.current.clear();
                    // handleSearch()
                  }}
                  style={{ marginRight: 10 }}
                  type="material"
                  iconStyle={{ color: colors.grey3 }}
                />
              </Animatable.View>
            </View>
          </View>

          <FlatList
            data={data}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => {
                  Keyboard.dismiss;
                  navigator.navigate("SearchScreen", { item: item.text });
                  setModalVisible(false);
                  setTextInputFocussed(true);
                }}
              >
                <View style={styles.view2}>
                  <Text style={{ color: colors.grey2, fontSize: 15 }}>
                    {item.text}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  text: {
    color: colors.grey3,
    fontSize: 16,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 0,
    borderColor: "#86939e",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingLeft: 10,
  },
  searchArea: {
    marginTop: 10,
    width: "94%",
    height: 50,
    backgroundColor: colors.grey5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: colors.grey4,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  view1: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  view2: {
    flexDirection: "row",
    padding: 15,
    alignItems: "center",
  },
  icon: {
    fontSize: 24,
    padding: 5,
    color: colors.grey2,
  },
  modal: {
    flex: 1,
  },
});
