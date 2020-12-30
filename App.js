import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import PushUpCounter from "./Components/PushUpCounter";
export default function App() {
  const [pullupCount, setPullupCount] = useState(20);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Big Title</Text>

      <PushUpCounter title="Push-up tracker" buttonTitle="Log a push-up!" />
      <Text>Pull-up tracker</Text>

      <Text>You did {pullupCount} pull-ups!</Text>
      <Button
        onPress={() => setPullupCount(pullupCount + 1)}
        title="Log a pull-up!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    color: "green",
  },
});
