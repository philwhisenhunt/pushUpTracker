import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
// import { Avatar } from "react-native-ui-kitten";

const ProfileScreen = () => {
  return (
    <View style={styles.blackBackground}>
      <View style={styles.fullPage}></View>
      {/* <Avatar></Avatar> */}
      <TextInput style={styles.innerText} placeholder="Name"></TextInput>
      <TextInput style={styles.innerText} placeholder="Height"></TextInput>
      <TextInput style={styles.innerText} placeholder="Weight"></TextInput>
      <TextInput style={styles.innerText} placeholder="Goal Weight"></TextInput>
      <Button title="Update"></Button>
    </View>
  );
};

export default ProfileScreen;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 30,
    justifyContent: "center",
  },
  blackBackground: {
    backgroundColor: "black",
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
    backgroundColor: "skyblue",
  },
});
