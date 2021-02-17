import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const LoadingScreen = () => {
  const showAlert = () => {
    alert("Pretending to save");
  };
  const [text, setText] = useState("");
  return (
    <View style={styles.blueBackground}>
      <View style={styles.loadingBoxTop}>
        <Text style={styles.blackText}>Current: </Text>

        <Text style={styles.blackText}>300 out of {text}</Text>
      </View>
      <View style={styles.loadingBoxBottom}>
        {/* <Text style={styles.innerText}>Goal: 300</Text> */}
        {/* <Text style={styles.innerText}>New Goal?</Text> */}
        <Text style={styles.blackText}>Goal:</Text>
        <TextInput
          style={styles.blackText}
          placeholder="300"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
      <Button title="Save" onPress={showAlert} />
    </View>
  );
};

export default LoadingScreen;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 80,
    justifyContent: "center",
  },
  whiteText: {
    color: "white",
    fontSize: 80,
    justifyContent: "center",
  },
  blackText: {
    color: "black",
    fontSize: 50,
    justifyContent: "flex-start",
  },
  blueBackground: {
    backgroundColor: "skyblue",
    flex: 1,
  },
  loadingBoxTop: {
    flexDirection: "row",
    backgroundColor: "skyblue",
    justifyContent: "flex-start",
    flex: 0.5,
    // alignSelf: "flex-end",
  },
  loadingBoxBottom: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "flex-start",
    flex: 0.5,
  },
});
