import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const EditProfileScreen = () => {
  return (
    <View style={styles.headline}>
      <Text>Edit Profile</Text>
      <Text>Phil W.</Text>
      <Text>10 Achievements</Text>
      <View>
        <Text>Avg reps per day</Text>
        <Text>10</Text>
      </View>

      <View>
        <Text>Reps this week</Text>
        <Text>457</Text>
      </View>

      <View>
        <Text>Max daily reps this year</Text>
        <Text>141</Text>
      </View>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  headline: {
    color: "black",
  },
  smallStats: {
    fontSize: 20,
  },
});
