import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RepStore from "../Stores/RepStore";

const LoadingScreen = () => {
  const showAlert = () => {
    alert("Pretending to save");
  };
  const [text, setText] = useState("");
  // const text = RepStore["repGoal"];
  return (
    <View style={styles.blueBackground}>
      <View style={styles.loadingBoxTop}>
        {/* <Text style={styles.innerText}>Goal: 300</Text> */}
        {/* <Text style={styles.innerText}>New Goal?</Text> */}
        <Text style={styles.innerText}>Goal:</Text>
        <TextInput
          style={styles.blackText}
          placeholder="300"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
      </View>
      <Button title="Save" onPress={showAlert} />
      <Button
        onPress={() => {
          RepStore.setGoal(text);
        }}
        color="steelblue"
        title="Push it"
      />
      <Text>{RepStore.repGoal}</Text>
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
    fontSize: 120,
    justifyContent: "flex-start",
  },
  goalText: {
    color: "black",
    fontSize: 40,
    justifyContent: "flex-start",
  },
  bigText: {
    color: "black",
    fontSize: 40,
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
