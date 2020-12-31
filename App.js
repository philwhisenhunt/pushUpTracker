import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PushUpCounter from "./Components/PushUpCounter";
import PullUpCounter from "./Components/PushUpCounter";
export default function App() {
  const [pullupCount, setPullupCount] = useState(20);
  return (
    <View style={styles.container}>
      <View style={styles.topBlock}></View>
      <View style={styles.middleBlock}>
        <Text style={styles.title}>Workout Tracker</Text>

        <PushUpCounter title="Push-up tracker" buttonTitle="Log a push-up!" />
        <PullUpCounter title="Pull-up tracker" buttonTitle="Log a pull-up!" />
      </View>
      <View style={styles.bottomBlock}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    color: "green",
  },
  topBlock: {
    flex: 2,
    backgroundColor: "powderblue",
  },
  middleBlock: {
    flex: 2,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  bottomBlock: {
    flex: 2,
    backgroundColor: "steelblue",
  },
});
