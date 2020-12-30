import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You did {count} push-ups</Text>
      <Button
      onPress={()} => setCount(count + 1)}
      title="Click me!"
    />
    </View>
  );
};

// This is where the react Native Styles are
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
