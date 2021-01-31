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
            <Text style={styles.title}>Tap Each Button to add a rep</Text>
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
            <Button
              onPress={async () => {
                const data = await saveStuff(
                  "http://localhost:3000/exercise_sets.json",
                  { rep_count: "12" }
                );
                setServerResponse(data);
              }}
              title="Save workout"
            />
            <Button
              onPress={async () => {
                const data = await getStuff();
                setExerciseInfo(data);
              }}
              title="Test API"
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
    paddingTop: 40,
  },
  topBlock: {
    flex: 1,
    backgroundColor: "powderblue",
    justifyContent: "center",
    alignItems: "center",
  },
  middleBlock: {
    flex: 2,
    backgroundColor: "skyblue",
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
});
