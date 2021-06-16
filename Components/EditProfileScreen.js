import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ProfileScreen = () => {
  return (
    <View style={styles.blackBackground}>
      <View style={styles.fullPage}></View>

      <Text style={styles.innerText}>Name:</Text>
      <TextInput
        style={styles.innerText}
        placeholderTextColor={"#666"}
        placeholder="First and Last"
      ></TextInput>
      <Text style={styles.innerText}>Height:</Text>
      <TextInput
        style={styles.innerText}
        placeholderTextColor={"#666"}
        placeholder="Height"
      ></TextInput>
      <Text style={styles.innerText}>Weight:</Text>
      <TextInput
        style={styles.innerText}
        placeholderTextColor={"#666"}
        placeholder="Weight"
      ></TextInput>
      <Text style={styles.innerText}>Goal Weight:</Text>
      <TextInput
        style={styles.innerText}
        placeholderTextColor={"#666"}
        placeholder="Goal Weight"
      ></TextInput>
      <Text style={styles.innerText}>Target Reps per week:</Text>
      <TextInput style={styles.innerText} placeholder="700"></TextInput>
      {/* <Button title="Update"></Button> */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
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
  logoutButton: {
    borderColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    margin: 30,
  },
  logoutText: {
    fontSize: 20,
    color: "black",
  },
});
