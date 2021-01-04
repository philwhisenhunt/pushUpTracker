import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const repCounter = ({ title, buttonTitle, repType }) => {
  const [repCount, setRepCount] = useState(10);
  //do I need to import repType here?

  return (
    <>
      <Button
        onPress={() => setRepCount(repCount + 1)}
        title={buttonTitle}
        color="steelblue"
      />
      <Text>
        You diid {repCount} {repType}
      </Text>
    </>
  );
};
export default repCounter;
