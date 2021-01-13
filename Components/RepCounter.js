import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { store, view } from "@risingstack/react-easy-state";
const repCounter = ({ title, buttonTitle, repType }) => {
  const [repCount, setRepCount] = useState(0);
  const user = store({ name: "Phil's " + title });
  const globalRepCount = store({ amount: 10 });
  return (
    <>
      <Button
        onPress={() => setRepCount(repCount + 1)}
        title={buttonTitle}
        color="steelblue"
      />
      <Text>
        You did {repCount} {repType}
      </Text>
      <Text>
        You are {user.name} and you did {globalRepCount.amount} total reps this
        workout.
      </Text>
    </>
  );
};
export default repCounter;
