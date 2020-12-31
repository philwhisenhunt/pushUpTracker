import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const PushUpCounter = ({ title, buttonTitle }) => {
  const [pushupCount, setPushupCount] = useState(10);

  return (
    <View style={styles.wideButton}>
      <Text>{title}</Text>
      <Text>You did {pushupCount} push-ups!</Text>
      <Button
        // style={styles.wideButton}
        onPress={() => setPushupCount(pushupCount + 1)}
        title={buttonTitle}
      />
    </View>
  );
};
export default PushUpCounter;

const styles = StyleSheet.create({
  wideButton: {
    flex: 1,
    backgroundColor: "coral",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    maxHeight: 100,
  },
});
