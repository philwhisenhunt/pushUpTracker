import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const repCounter = ({ title, buttonTitle, repType }) => {
  const [repCount, setRepCount] = useState(0);

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
    </>
  );
};
export default repCounter;
