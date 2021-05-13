import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

// const navigation = useNavigation();
// const navigateToRoot = () => {
//   navigation.navigate("Root");
// };
// const navigateToRoot = () => {
//   navigation.navigate("Home");
// };
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.titles}>Workout Tracker</Text>
        <View style={styles.subtitle}>
          <Text style={styles.subtitleText}>One rep at a time</Text>
        </View>
      </View>
      <TextInput
        style={styles.inputText}
        placeholder="Email"
        placeholderTextColor="#666"
        onChangeText={(text) => this.setState({ email: text })}
      />
      <TextInput
        style={styles.inputText}
        placeholder="Password"
        placeholderTextColor="#666"
        onChangeText={(text) => this.setState({ password: text })}
      />
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signup}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  loginContainer: {},
  headlineContainer: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  blueContainer: {
    flex: 3,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  secureTextEntry: {
    fontSize: 40,
  },
  titles: {
    color: "white",
    fontSize: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20,
  },
  inputText: {
    height: 50,
    fontSize: 20,
    backgroundColor: "white",
    padding: 10,
    paddingLeft: 20,
    margin: 20,
    borderRadius: 25,
    width: 300,
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },

  signup: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
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
  loginText: {
    fontSize: 20,
    color: "white",
  },
  subtitle: {
    paddingTop: 20,
  },
  subtitleText: {
    fontSize: 16,
    color: "white",
  },
});
