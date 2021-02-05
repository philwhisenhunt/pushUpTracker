import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { view } from "@risingstack/react-easy-state";
import RepStore from "./../Stores/RepStore";

const repCounter = view(({ title, buttonTitle, repType }) => {
  const reps = RepStore[repType];
  return (
    <>
      <Button
        onPress={() => {
          RepStore.setReps(repType, reps + 1);
        }}
        title={repType} //How can I add two piece of text here
        color="steelblue"
      />
      <Text style={styles.repCountingText}>
        {reps} {repType}
      </Text>
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
