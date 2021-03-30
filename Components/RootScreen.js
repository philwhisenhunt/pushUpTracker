import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
  AppState,
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
            {/* <Text>Today's progress</Text> */}
            <View style={styles.giantDisplay}>
              <Text style={styles.totalRepsDisplay}>
                {RepStore.totalReps} / {RepStore.repGoal}
              </Text>
              <Text>{RepStore.updated_at.toString()}</Text>
            </View>
          </View>
          <View style={styles.fitToText}>
            {/* <RepCounter
                title="Sit-up tracker"
                buttonTitle="Sit-up"
                repType="Sit-ups"
                style={styles.submitButton}
              />
              <Text>-</Text>
              <RepCounter
                title="Sit-up tracker"
                buttonTitle="Sit-up"
                repType="Sit-ups"
                style={styles.submitButton}
              /> */}
          </View>
          <View style={styles.fitToText}>
            {/* <Button
                onPress={async () => {
                  const data = await getStuff();
                  setExerciseInfo(data);
                }}
                title="Test API"
                style={styles.submitButton}
                color="black"
              /> */}
            <Button
              onPress={async () => {
                // alert(RepStore["Push-up"]);
                // return;
                const data = await saveStuff(
                  "http://localhost:3000/exercise_sets.json",
                  {
                    exercises: {
                      //How to prep for other custom exercises added here?
                      //For example, have a custom workout created for this day
                      //take in user's preferences too?
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

          {/* <Text>Rep Count: {exerciseInfo.rep_count}</Text>
          <Text>What the server sent back: {serverResponse.rep_count}</Text>
          <Text>Total reps: {RepStore.totalReps}</Text> */}
        </>
      )}
    </View>
  );
});

export default RootScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    color: "white",
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
  // wideButton: {
  //   flex: 1,
  //   backgroundColor: "coral",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   alignSelf: "stretch",
  //   maxHeight: 100,
  // },
  submitButton: {
    // flex: 0.5,
    // margin: 100,
    padding: 10,
    margin: 10,
  },
  fitToText: {
    flexDirection: "row",
    justifyContent: "center",
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
});
