import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const ChooseExercises = () => {
  return (
    <View style={StyleSheet.blueBackground}>
      <Text>Add or remove exercises</Text>
      <Text>Push-ups</Text>
      <Text>Sit-ups</Text>
      <Text>Chin-ups</Text>
      <TextInput 
      placeholder="Add exercise"
      onChangeText={(text) => setText(text)}>
        
      </TextInput>
       
    </View>
  );
};
export default ChooseExercises;
const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
});
//Use touchablewithoutfeedback?
//https://reactnative.dev/docs/touchablewithoutfeedback
//Add ability to add and remove stuff
//Would each block of text have to be in a view or different type of component?
