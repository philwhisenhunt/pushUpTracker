import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { TextInput } from "react-native-gesture-handler";
const LoadingScreen = () => {
    const showAlert = () => {
        alert("Sanity check")
    }
    const [text, setText] = useState('')
  return (

    <View style={styles.blueBackground}>
      <View style={styles.loadingBoxTop}>
        <Text style={styles.innerText}>Current: 300</Text>
      </View>
      <View style={styles.loadingBoxBottom}>
        <Text style={styles.innerText}>Goal: 300</Text>
        <Text style={styles.innerText}>New Goal?</Text>
        
        <TextInput
        style={{height: 40}}
        placeholder="Type new goal here"
        onChangeText={text => setText(text)}
        defaultValue={text}
        />
        <Button title="Save"
        onPress = {showAlert}/>
      </View>
    </View>
  );
};

export default LoadingScreen;
const styles = StyleSheet.create({
  innerText: {
    color: "white",
    fontSize: 100,
    justifyContent: "center",
  },
  blueBackground: {
    backgroundColor: "skyblue",
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
    backgroundColor: "black",
    justifyContent: "center",
    flex: 0.5,
  },
});
