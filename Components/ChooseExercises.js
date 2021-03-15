import { View, Text, Button, StyleSheet } from "react-native";

const ChooseExercises = () => {
  return <View style={StyleSheet.blueBackground}>
    <Text>Add or remove exercises</Text>
    <Text>Push-ups</Text>
    <Text>Sit-ups</Text>


  </View>;
};
export default ChooseExercises;
const styles = StyleSheet.create({
  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
});
