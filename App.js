import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PushUpCounter from "./Components/PushUpCounter";
import PullUpCounter from "./Components/PullUpCounter";
import RepCounter from "./Components/RepCounter";
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBlock}>
        <Text style={styles.title}>Workout Tracker</Text>
      </View>
      <View style={styles.middleBlock}>
        <RepCounter
          title="Push-up tracker"
          buttonTitle="Log a push-up"
          repType="Push-ups"
        />
        <RepCounter
          title="Pull-up tracker"
          buttonTitle="Log a pull-up!"
          repType="Pull-ups"
        />
        <RepCounter
          title="Chin-up tracker"
          buttonTitle="Log a chin-up"
          repType="Chin-ups"
        />
        <RepCounter
          title="Sit-up tracker"
          buttonTitle="Log a sit-up"
          repType="Sit-Ups"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    color: "steelblue",
    paddingTop: 40,
  },
  topBlock: {
    flex: 1,
    backgroundColor: "powderblue",
    justifyContent: "center",
    alignItems: "center",
  },
  middleBlock: {
    flex: 2,
    backgroundColor: "skyblue",
  },
  bottomBlock: {
    flex: 1,
    backgroundColor: "steelblue",
  },
  // wideButton: {
  //   flex: 1,
  //   backgroundColor: "coral",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   alignSelf: "stretch",
  //   maxHeight: 100,
  // },
});
