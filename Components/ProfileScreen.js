import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";

const ProfileScreen = () => {
  return (
    <View style={styles.headline}>
      <Text>Profile</Text>
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

      <View>
        <Text>Max daily reps all time</Text>
        <Text>14111</Text>
      </View>
      <TouchableOpacity style={styles.editBtn}>Edit</TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headline: {
    color: "black",
  },
  smallStats: {
    fontSize: 20,
  },
  editBtn: {
    width: 300,
    backgroundColor: "black",
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
});
