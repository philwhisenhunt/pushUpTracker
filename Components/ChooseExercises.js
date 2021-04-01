import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const [text, setText] = useState("");
const [text2, setText2] = useState("");

const ChooseExercises = () => {
  return (
    <View style={StyleSheet.blueBackground}>
      <Text>Add or remove exercises</Text>

      <TextInput
        style={StyleSheet.blackText}
        placeholder="Push-ups"
        onChangeText={(text) => setText(text)}
        defaultValue={text}
      ></TextInput>
      <TextInput
        style={StyleSheet.blackText}
        placeholder="Sit-ups"
        onChangeText={(text2) => setText2(text)}
      ></TextInput>
      {/* <TextInput
        placeholder="Chin-ups"
        onChangeText={(text) => setText(text)}
      ></TextInput>
      <TextInput
        placeholder="Add exercise"
        onChangeText={(text) => setText(text)}
      ></TextInput> */}
    </View>
  );
};
export default ChooseExercises;
const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
  blackText: {
    color: "black",
    fontSize: 120,
    justifyContent: "flex-start",
  },
});
// //Use touchablewithoutfeedback?
// //https://reactnative.dev/docs/touchablewithoutfeedback
// //Add ability to add and remove stuff
// //Would each block of text have to be in a view or different type of component?
