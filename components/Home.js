import React from "react";
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import Foundation from "react-native-vector-icons/Foundation";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from "../assets/colors";

import Video from "../assets/video.jpg";
import DalasProfile from "../assets/dalas-profile.jpg";

Foundation.loadFont();
Ionicons.loadFont();
MaterialCommunityIcons.loadFont();

const windowWidth = Dimensions.get("window").width;

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <TouchableOpacity style={styles.iconBack}>
          <Foundation name="record" size={32} color={colors.red} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconClose}>
          <MaterialCommunityIcons
            name="phone-cancel"
            size={32}
            color={colors.dark}
          />
        </TouchableOpacity>
        <Image source={Video} style={styles.image} />
      </View>

      <View style={styles.actionWrapper}>
        <TouchableOpacity style={styles.buttonAction}>
          <Ionicons name="videocam" size={28} color={colors.icon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAction}>
          <FontAwesome5
            name="microphone"
            size={28}
            color={colors.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAction}>
          <FontAwesome5
            name="record-vinyl"
            size={28}
            color={colors.red}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAction}>
          <MaterialCommunityIcons
            name="desktop-mac"
            size={28}
            color={colors.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.chatWrapper}>
        <View style={styles.chatMessage}>
          <View style={styles.chatAvatar}>
            <Image
              source={DalasProfile}
              style={styles.chatAvatarImage}
            ></Image>
          </View>
          <View style={styles.chatMessageInfo}>
            <Text style={styles.chatMessageName}>Dalas Review</Text>
            <View style={styles.chatMessageContent}>
              <Text style={styles.chatMessageText}>
                Hey-hey! ✋🤓
              </Text>
            </View>
          </View>
        </View>

        <View style={styles.chatMessage}>
          <View style={styles.chatAvatar}>
            <Image
              source={DalasProfile}
              style={styles.chatAvatarImage}
            ></Image>
          </View>
          <View style={styles.chatMessageInfo}>
            <Text style={styles.chatMessageName}>Dalas Review</Text>
            <View style={styles.chatMessageContent}>
              <Text style={styles.chatMessageText}>
                Hey-hey! ✋🤓
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    position: "relative",
  },
  iconBack: {
    position: "absolute",
    zIndex: 10,
    top: 40,
    left: 20,
  },
  iconClose: {
    position: "absolute",
    zIndex: 10,
    top: 40,
    right: 20,
  },
  image: {
    width: windowWidth,
    height: 400,
  },
  actionWrapper: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#d0d0d0",
    paddingVertical: 10,
    justifyContent: "center",
  },
  buttonAction: {
    backgroundColor: "#ffffff",
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginHorizontal: 8,
  },
  chatAvatarImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  chatWrapper: {
    marginTop: 15,
    paddingHorizontal: 20,
  },
  chatMessage: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 15,
  },
  chatAvatar: {},
  chatMessageInfo: {
    marginLeft: 10,
  },
  chatMessageName: {
    marginBottom: 3,
  },
  chatMessageContent: {
    backgroundColor: colors.gray,
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  chatMessageText: {},
});

export default Home;
