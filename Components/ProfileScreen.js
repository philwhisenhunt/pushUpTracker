import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const ProfileScreen = () => {
  return (
    <View style={styles.blueBackground}>
      <View style={styles.fullPage}>
        <Text style={styles.innerText}>Profile Screen here</Text>
      </View>
      <TextInput style={styles.innerText}>Name</TextInput>
      <TextInput style={styles.innerText}>Height</TextInput>
      <TextInput style={styles.innerText}>Weight</TextInput>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 50,
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
  fullPage: {
    backgroundColor: "black",
  },
});
