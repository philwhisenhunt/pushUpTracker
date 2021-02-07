import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const LoadingScreen = () => {
  return (
    <View style={styles.blueBackground}>
      <View style={styles.loadingBoxTop}>
        <Text style={styles.innerText}>Loading</Text>
      </View>
   
    </View>
  );
};

export default LoadingScreen;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 100,
    justifyContent: "center",
  },
  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
  loadingBoxTop: {
    flexDirection: "row",
    backgroundColor: "skyblue",
    justifyContent: "center",
    flex: 0.5,
    // alignSelf: "flex-end",
  },
  loadingBoxBottom: {
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "center",
    flex: 0.5,
  },
});
