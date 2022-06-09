import { View, Text, Linking, StyleSheet } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { Avatar, Button, Icon } from "@rneui/base";
import { colors } from "../global/styles";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../../firebase";

export default function DrawerContent(props) {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("SignInWelcome");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View
          style={{
            backgroundColor: colors.buttons,
          }}
        >
          {/* Avatar */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",

              paddingLeft: 10,
              paddingVertical: 10,
            }}
          >
            <Avatar
              rounded
              avatarStyle={styles.avatar}
              size={75}
              source={{
                uri: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
              }}
            />

            <View style={{ marginLeft: 10 }}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: colors.cardBackground,
                  fontSize: 18,
                }}
              >
                No name
              </Text>
              <Text
                style={{
                  color: colors.cardBackground,
                  fontSize: 14,
                }}
              >
                {auth.currentUser?.email}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginBottom: 10,
            }}
          >
            {/* My Favorites */}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.cardBackground,
                    fontSize: 18,
                  }}
                >
                  1
                </Text>
                <Text
                  style={{
                    color: colors.cardBackground,
                    fontSize: 14,
                  }}
                >
                  My Favorites
                </Text>
              </View>
            </View>

            {/* Shopping Cart */}
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    color: colors.cardBackground,
                    fontSize: 18,
                  }}
                >
                  0
                </Text>
                <Text
                  style={{
                    color: colors.cardBackground,
                    fontSize: 14,
                  }}
                >
                  Shopping Cart
                </Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...props} />

        <DrawerItem
          label="Payment"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="credit-card-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Khuyến mãi"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="tag-heart"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Cài đặt"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="cog-outline"
              color={color}
              size={size}
            />
          )}
        />

        <DrawerItem
          label="Trợ giúp"
          icon={({ color, size }) => (
            <Icon
              type="material-community"
              name="lifebuoy"
              color={color}
              size={size}
            />
          )}
        />
      </DrawerContentScrollView>

      <DrawerItem
        label="Đăng xuất"
        icon={({ color, size }) => (
          <Icon
            type="material-community"
            name="logout-variant"
            color={color}
            size={size}
          />
        )}
        onPress={handleSignOut}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatar: {
    borderWidth: 4,
    borderColor: colors.cardBackground,
  },
});
