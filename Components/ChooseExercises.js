import { View, Text, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import RepStore from "../Stores/RepStore";

const ChooseExercises = () => {
  const [text, setText] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.blueBackground}>
        <Text style={styles.blackText}>Current exercises:</Text>
        {RepStore.persistableFields.map((n) => (
          <Text style={styles.blackText}>{n}</Text>
        ))}
        <Text style={styles.blackText}>---</Text>

        <Text style={styles.blackText}>Add exercise:</Text>

        <TextInput
          style={styles.blackText}
          placeholder="i.e. Kettlebell Swings"
          onChangeText={(text) => setText(text)}
        ></TextInput>
      </View>
    </View>
  );
};
export default ChooseExercises;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },

  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  blackText: {
    color: "black",
    fontSize: 30,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
// //Use touchablewithoutfeedback?
// //https://reactnative.dev/docs/touchablewithoutfeedback
// //Add ability to add and remove stuff
// //Would each block of text have to be in a view or different type of component?
