import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RepStore from "../Stores/RepStore";
import { useNavigation, useRoute } from "@react-navigation/native";
const LoadingScreen = () => {
  const navigation = useNavigation();
  const navigateToRootScreen = () => {
    navigation.navigate("Goal");
  };

  return <View style={styles.blueBackground}></View>;
};

export default LoadingScreen;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 80,
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 80,
    justifyContent: "center",
  },
  blackText: {
    color: "black",
    fontSize: 120,
    justifyContent: "flex-start",
  },
  goalText: {
    color: "black",
    fontSize: 40,
    justifyContent: "flex-start",
  },
  bigText: {
    color: "black",
    fontSize: 40,
    justifyContent: "flex-start",
  },

  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
  loadingBoxTop: {
    flexDirection: "row",
    backgroundColor: "skyblue",
    justifyContent: "flex-start",
    flex: 0.5,
    // alignSelf: "flex-end",
  },
  loadingBoxBottom: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    flex: 0.5,
  },
});
