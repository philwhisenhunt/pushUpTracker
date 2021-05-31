import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const EditProfileScreen = () => {
  return (
    <View style={styles.headline}>
      <Text>Edit Profile</Text>
      <Text>Phil W.</Text>
      <Text>10 Achievements</Text>
      <Text>Avg reps per day</Text>
    </View>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  headline: {
    color: "black",
  },
});
