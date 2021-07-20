import React from "react";
import {
  StatusBar,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";
import colors from "../assets/colors";

import Profile1 from "../assets/profile1.jpg";
import Profile2 from "../assets/profile2.jpg";
import Profile3 from "../assets/profile3.jpg";
import Profile4 from "../assets/profile4.jpg";

Entypo.loadFont();

const Chats = () => {
  return (
    <View>
      <StatusBar hidden={true} />
      <View style={styles.chatHeader}>
        <Text style={styles.chatHeaderTitle}>Mensajes</Text>
        <TouchableOpacity>
          <Entypo
            name="new-message"
            size={24}
            color={colors.primary}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrapper}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>

      <View style={styles.storyWrapper}>
        <View style={styles.storyItem}>
          <TouchableOpacity>
            <Image source={Profile1} style={styles.storyImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.storyItem}>
          <TouchableOpacity>
            <Image source={Profile2} style={styles.storyImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.storyItem}>
          <TouchableOpacity>
            <Image source={Profile3} style={styles.storyImage} />
          </TouchableOpacity>
        </View>
        <View style={styles.storyItem}>
          <TouchableOpacity>
            <Image source={Profile4} style={styles.storyImage} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  chatHeader: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  chatHeaderTitle: {
    fontSize: 32,
  },
  searchWrapper: {
    paddingHorizontal: 20,
  },
  searchInput: {
    backgroundColor: "#d9d9d9",
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  storyWrapper: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: "space-between",
  },
  storyItem: {
    borderRadius: 42,
    borderWidth: 2,
    borderColor: colors.green,
    borderStyle: "solid",
    padding: 3,
  },
  storyImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
  },
});

export default Chats;
