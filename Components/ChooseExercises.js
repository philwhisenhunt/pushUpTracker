import { View, Text, Button, StyleSheet } from "react-native";

const ChooseExercises = () => {
  return (
    <View style={StyleSheet.blueBackground}>
      <Text>Add or remove exercises</Text>
      <Text>Push-ups</Text>
      <Text>Sit-ups</Text>
      <Text>Chin-ups</Text>
      <TextInput>Add exercise</TextInput>
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
