import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity } from "react-native";

const ProfileScreen = () => {
  return (
    <View style={styles.headline}>
      <Text style={styles.sectionHeadline}>Profile</Text>
      <TouchableOpacity style={styles.profileCircle}></TouchableOpacity>
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
      <TouchableOpacity style={styles.editBtn}>Edit Profile</TouchableOpacity>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  headline: {
    color: "black",
  },
  sectionHeadline: {
    color: "black",
    fontSize: 14,
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
  profileCircle: {
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: "black",
    height: 50,
  },
});
