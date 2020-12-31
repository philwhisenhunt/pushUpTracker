import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const PullUpCounter = ({ title, buttonTitle }) => {
  const [pullupCount, setPullupCount] = useState(10);

  return (
    <>
      <Text>{title}</Text>
      <Text>You did {pullupCount} pull-ups!</Text>
      <Button
        onPress={() => setPullupCount(pullupCount + 1)}
        title={buttonTitle}
      />
    </>
  );
};
export default PullUpCounter;
