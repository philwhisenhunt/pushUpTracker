import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { view } from "@risingstack/react-easy-state";
import RepStore from "./../Stores/RepStore";

const repCounter = view(({ title, buttonTitle, repType }) => {
  const reps = RepStore[repType];
  return (
    <>
      <Text style={styles.repCountingText}>
        {reps} {repType + "s"}
      </Text>
      <Button
        onPress={() => {
          RepStore.setReps(repType, reps + 1);
        }}
        title={"Add " + repType} //How can I add two piece of text here
        color="steelblue"
      />
    </>
  );
});

const styles = StyleSheet.create({
  repCountingText: {
    fontSize: 60,
    color: "white",
    // flex: 1,
    // backgroundColor: "#fff",
  },
});
export default repCounter;
