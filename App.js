import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import RepCounter from "./Components/RepCounter";
import { view } from "@risingstack/react-easy-state";
import RepStore from "./Stores/RepStore";
import { getStuff } from "./src/FetchStuff.js";
import { saveStuff } from "./src/SaveStuff.js";
export default view(function App() {
  const [exerciseInfo, setExerciseInfo] = useState({});
  const [serverResponse, setServerResponse] = useState({});

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
          <View style={styles.topBlock}>
            <Text style={styles.title}>Workout Tracker</Text>
            <Text style={styles.subTitle}>Tap Each Button to add a rep</Text>
          </View>
          <View style={styles.middleBlock}>
            <RepCounter
              title="Push-up tracker"
              buttonTitle="Log a push-up"
              repType="Push-ups"
            />
            <RepCounter
              title="Pull-up tracker"
              buttonTitle="Log a pull-up!"
              repType="Pull-ups"
            />
            <RepCounter
              title="Chin-up tracker"
              buttonTitle="Log a chin-up"
              repType="Chin-ups"
            />
            <RepCounter
              title="Sit-up tracker"
              buttonTitle="Log a sit-up"
              repType="Sit-ups"
            />
          </View>
          <View style={styles.fitToText}>
            <Button
              onPress={async () => {
                const data = await getStuff();
                setExerciseInfo(data);
              }}
              title="Test APII"
              style={styles.submitButton}
              color="black"
            />
            <Button
              onPress={async () => {
                const data = await saveStuff(
                  "http://localhost:3000/exercise_sets.json",
                  {
                    rep_count: "12",
                    weight: 120,
                    exercise_type: "kettlebell rows",
                  }
                );
                setServerResponse(data);
              }}
              title="Save workout"
            />
          </View>
          <Text>Rep Count: {exerciseInfo.rep_count}</Text>
          <Text>What the server sent back: {serverResponse.rep_count}</Text>
          <Text>Total reps: {RepStore.totalReps}</Text>
        </>
      )}
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    color: "steelblue",
    paddingTop: 0,
  },
  subTitle: {
    fontSize: 20,
    color: "steelblue",
    paddingTop: 0,
  },
  topBlock: {
    flex: 0.2,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 10,
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
});
