import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const ProfileScreen = () => {
  return (
    <View style={styles.blueBackground}>
      <View style={styles.loadingBoxTop}>
        <Text style={styles.innerText}>Profile Screen here</Text>
      </View>
    </View>
  );
};

export default ProfileScreen;
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
    backgroundColor: "white",
    justifyContent: "center",
    flex: 0.5,
  },
});
