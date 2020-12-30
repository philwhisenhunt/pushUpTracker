import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Push up tracker</Text>
      <Text>You did {count} push-ups!</Text>
      <Button onPress={() => setCount(count + 1)} title="Log a push-up!" />
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
});
