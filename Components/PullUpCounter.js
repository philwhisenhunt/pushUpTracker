import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
const PullUpCounter = ({ title, buttonTitle }) => {
  const [pullupCount, setPullupCount] = useState(10);

  return (
    <View style={styles.wideButton}>
      <Text>{title}</Text>
      <Text>You did {pullupCount} pull-ups!</Text>
      <View style={styles.wideButton}>
        <Button
          onPress={() => setPullupCount(pullupCount + 1)}
          title={buttonTitle}
        />
      </View>
    </View>
  );
};
export default PullUpCounter;
const styles = StyleSheet.create({
  wideButton: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    maxHeight: 100,
    marginTop: 2,
  },
});
