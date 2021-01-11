import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Workout Tracker</Text>
        <View style={styles.inputView}>
          <TextInput
            style={styles.inputText}
            placeholder="Email"
            placeholderTextColor="#003f5"
            onChangeText={(text) => this.setState({ email: text })}
          />
        </View>
      </View>
    );
  }
}
state = {
  email: "",
  password: "",
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#003f5c",
    alignItems: "center",
    justifyContent: "center",
  },
});
