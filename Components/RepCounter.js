import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { view } from "@risingstack/react-easy-state";
import RepStore from "./../Stores/RepStore";

const repCounter = view(({ title, buttonTitle, repType }) => {
  // AROTH: don't need to use local state, use the global RepStore imported above
  // const [repCount, setRepCount] = useState(0);

  const reps = RepStore[repType];
  return (
    <>
      <Button
        onPress={() => {
          RepStore.setReps(repType, reps + 1);
        }}
        title={buttonTitle}
        color="steelblue"
      />
      <Text>
        You did {reps} {repType}
      </Text>
      <Text>
        You are {"NAME"} and you did {reps} total reps this workout.
      </Text>
    </>
  );
});
export default repCounter;
