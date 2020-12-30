import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
export default function App() {
  const [pushup_count, setCount] = useState(0);
  var [pullup_count, setAnotherCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>Push-up tracker</Text>
      <Text>You did {pushup_count} push-ups!</Text>
      <Button
        onPress={() => setCount(pushup_count + 1)}
        title="Log a push-up!"
      />

      <Text style>Pull-up tracker</Text>
      <Text>You did {pullup_count} pull-ups!</Text>
      <Button
        onPress={() => setAnotherCount(pullup_count + 1)}
        title="Log a push-up!"
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
});
