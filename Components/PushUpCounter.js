import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const PushUpCounter = ({ title, buttonTitle }) => {
  const [pushupCount, setPushupCount] = useState(10);

  return (
    <>
      <Text>{title}</Text>
      <Text>You did {pushupCount} push-ups!</Text>
      <Button
        onPress={() => setPushupCount(pushupCount + 1)}
        title={buttonTitle}
      />
    </>
  );
};
export default PushUpCounter;
