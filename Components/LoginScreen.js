import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <View style={styles.headlineContainer}>
            <Text style={styles.titles}>Workout Tracker</Text>
          </View>
          <View style={styles.subtitle}>
            <Text>One rep at a time</Text>
          </View>
        </View>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5"
          onChangeText={(text) => this.setState({ email: text })}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5"
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
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  loginContainer: {
    flex: 1,
    // backgroundColor: "white",
    // alignItems: "center",
    // justifyContent: "center",
    // width: "80%",
    backgroundColor: "black",
    // borderRadius: 25,
    height: 50,
    marginBottom: 40,
    justifyContent: "center",
    padding: 0,
    width: "90%",
  },
  headlineContainer: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
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
    margin: 20,
    borderRadius: 25,
    width: 300,
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },

  signup: {
    color: "black",
    fontSize: 11,
  },
  loginBtn: {
    width: 300,
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    fontSize: 20,
    color: "black",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
  },
});
