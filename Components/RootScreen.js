import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  AppState,
  TouchableOpacity,
} from "react-native";
import { view } from "@risingstack/react-easy-state";
import RepStore from "../Stores/RepStore";
import RepCounter from "../Components/RepCounter";
import { useNavigation, useRoute } from "@react-navigation/native";
import { saveStuff } from "../src/saveStuff";

const RootScreen = view(() => {
  const [exerciseInfo, setExerciseInfo] = useState({});
  const [serverResponse, setServerResponse] = useState({});
  const navigation = useNavigation();

  const navigateToScreen = () => {
    navigation.navigate("Goal");
  };

  const navigateToProfile = () => {
    navigation.navigate("Profile");
  };

  const navigateToChooseExercises = () => {
    navigation.navigate("Choose Exercises");
  };

  const navigateToLogin = () => {
    console.log("in Login function");
    navigation.navigate("Login");
  };

  const navigateToHome = () => {
    console.log("in HOME function");

    navigation.navigate("ROOT");
  };

  // return <LoadingScreen />;
  return (
    <View style={styles.container}>
      {RepStore.isHydrated === false && (
        <>
          <ActivityIndicator size="large" animating={true} />
          <Text>Please wait, loading...</Text>
        </>
      )}
      {RepStore.isHydrated === true && (
        <>
          <View style={styles.topBlock}></View>
          <View style={styles.middleBlock}>
            <RepCounter
              title="Push-up tracker"
              buttonTitle="Push-up"
              repType="Push-up"
            />
            <RepCounter
              title="Pull-up tracker"
              buttonTitle="Pull-up!"
              repType="Pull-up"
            />
            {/* <RepCounter
                title="Chin-up tracker"
                buttonTitle="Chin-up"
                repType="Chin-ups"
              /> */}
            <RepCounter
              title="Sit-up tracker"
              buttonTitle="Sit-up"
              repType="Sit-up"
            />

            <View style={styles.giantDisplay}>
              <Text style={styles.totalRepsDisplay}>
                {RepStore.totalReps} / {RepStore.repGoal}
              </Text>
            </View>
            {/* <Button
              title="Login Link"
              style={styles.button}
              onPress={navigateToLogin}
            ></Button> */}
            <TouchableOpacity
              style={styles.logoutButton}
              onPress={navigateToLogin}
            >
              <Text style={styles.loginText}>Logout</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.fitToText}>
            <Button
              onPress={async () => {
                const data = await saveStuff(
                  "http://localhost:3000/exercise_sets.json",
                  {
                    exercises: {
                      push_ups: RepStore["Push-up"],
                      pull_ups: RepStore["Pull-up"],
                      sit_ups: RepStore["Sit-up"],
                    },
                  }
                );
                alert(JSON.stringify(data));
                setServerResponse(data);
              }}
              title="Save workout"
            />
            <Button
              title="Goal"
              onPress={navigateToScreen}
              style={styles.button}
            />

            <Button
              title="Profile"
              onPress={navigateToProfile}
              style={styles.button}
            />

            <Button
              title="Choose Exercise"
              onPress={navigateToChooseExercises}
              style={styles.button}
            />
          </View>
        </>
      )}
    </View>
  );
});

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    fontSize: 20,
    color: "white",
    paddingTop: 0,
  },
  subTitle: {
    fontSize: 10,
    color: "steelblue",
    paddingTop: 0,
  },
  topBlock: {
    flex: 0.2,
    backgroundColor: "skyblue",
    justifyContent: "center",
    alignItems: "center",
    color: "black",
    // borderWidth: 10,
  },
  middleBlock: {
    flex: 2,
    backgroundColor: "skyblue",
    padding: 10,
  },
  bottomBlock: {
    flex: 1,
    backgroundColor: "steelblue",
  },

  submitButton: {
    padding: 10,
    margin: 10,
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  totalRepsDisplay: {
    fontSize: 70,
    color: "white",
  },
  giantDisplay: {
    fontSize: 20,
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "skyblue",
  },
  innerText: {
    color: "white",
  },
  button: {
    margin: 50,
    backgroundColor: "green",
    color: "green",
  },
  logoutButton: {
    width: 300,
    backgroundColor: "black",
    // borderRadius: 25,
    // borderWidth: 5,
    borderColor: "white",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 20,
    color: "white",
  },
});
