import React from "react";
import { view } from "@risingstack/react-easy-state";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import RootScreen from "./Components/RootScreen";
import LoadingScreen from "./Components/LoadingScreen";
import GoalScreen from "./Components/GoalScreen";

const DefaultStack = createStackNavigator();

const App = () => {
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

      </DefaultStack.Navigator>
    </NavigationContainer>
  );
};

export default view(App);
