import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import RepStore from "../Stores/RepStore";
import { useNavigation, useRoute } from "@react-navigation/native";
const LoadingScreen = () => {
  const navigation = useNavigation();
  const navigateToRootScreen = () => {
    navigation.navigate("Goal");
  };
  const showAlert = () => {
    const texter = RepStore.repGoal;
    console.log("The goal is now: " + texter);
  };
  const [text, setText] = useState("");
  // const text = RepStore["repGoal"];
  const goalz = RepStore["repGoal"];
  return (
    <View style={styles.blueBackground}>
      {RepStore.isHydrated === false && (
        <>
          <ActivityIndicator size="large" animating={true} />
          <Text>Please wait, loading...</Text>
        </>
      )}
      {RepStore.isHydrated === true && (
        <>
          <View style={styles.loadingBoxTop}>
            {/* <Text style={styles.innerText}>Goal: 300</Text> */}
            {/* <Text style={styles.innerText}>New Goal?</Text> */}
            <Text style={styles.innerText}>Goal:</Text>
            <TextInput
              style={styles.blackText}
              placeholder={RepStore.repGoal}
              onChangeText={(text) => setText(text)}
            />
          </View>
          <Button title="Save" onPress={showAlert} />
          <Button
            // onPress={navigateToRootScreen}
            onPress={RepStore.setGoal(text)}
            color="steelblue"
            title="Push it"
          />
          <Text>Goal is now:</Text>
          <Text>{RepStore.repGoal}</Text>
        </>
      )}
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
