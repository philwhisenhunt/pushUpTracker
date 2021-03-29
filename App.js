import React, { useRef, useState, useEffect } from "react";
import { AppState } from "react-native";
import { view } from "@risingstack/react-easy-state";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootScreen from "./Components/RootScreen";
import LoadingScreen from "./Components/LoadingScreen";
import GoalScreen from "./Components/GoalScreen";
import ProfileScreen from "./Components/ProfileScreen";
import RepStore from "./Stores/RepStore";
import ChooseExercises from "./Components/ChooseExercises";

const DefaultStack = createStackNavigator();

const App = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);

    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      console.log("App has come to the foreground!");
      RepStore.resetCheck();
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);
    console.log("AppState", appState.current);
  };

  return (
    <NavigationContainer>
      <DefaultStack.Navigator>
        <DefaultStack.Screen
          name="Home"
          component={RootScreen}
          options={{
            headerShown: false, // change this to `false`
          }}
        />
        <DefaultStack.Screen name="Loading" component={LoadingScreen} />
        <DefaultStack.Screen name="Goal" component={GoalScreen} />
        <DefaultStack.Screen name="Profile" component={ProfileScreen} />
        {/* <DefaultStack.Screen
          name="Choose Exercises"
          component={ChooseExercises}
        /> */}
      </DefaultStack.Navigator>
    </NavigationContainer>
  );
};

export default view(App);
