import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from "react-native";
import axios from "axios";

const LoginPage = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isRegister, setIsRegister] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async () => {
    try {
      const response = await axios.post("http:/192.168.1.215:8080/register", {
        username,
        password,
        email,
      });

      if (response.data.success) {
        handleLogin();
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://192.168.1.215:8080/login", {
        username,
        password,
      });
      if (response.data.success) {
        navigation.navigate("Welcome");
      } else {
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsRegister(!isRegister)}>
        <Text style={styles.toggleRegisterLogin}>
          {isRegister ? "Go to Login" : "Go to Register"}
        </Text>
      </TouchableOpacity>
      <Text style={styles.textTitle}>{isRegister ? "Register" : "Login"}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        {isRegister && (
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
        )}
        <TouchableOpacity
          style={styles.button}
          onPress={isRegister ? handleRegister : handleLogin}
        >
          <Text style={styles.buttonText}>
            {isRegister ? "Register" : "Login"}
          </Text>
        </TouchableOpacity>
      </View>
      {errorMessage !== "" && (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#FFD180",
    paddingTop: "10%",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  input: {
    width: "50%",
    padding: 10,
    marginBottom: 10,
    borderWidth: 0,
    borderRadius: 50,
    backgroundColor: "#FFE0B2",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  button: {
    width: "50%",
    padding: 10,
    borderRadius: 50,
    backgroundColor: "#673ab7",
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  toggleRegisterLogin: {
    color: "#673ab7",
    textDecorationLine: "underline",
    marginBottom: 20,
  },
  textTitle: {
    fontSize: 20,
    marginBottom: 20,
    color: "#673ab7",
    fontWeight: "bold",
  },
  errorMessage: {
    color: "#D32F2F",
    marginBottom: 20,
    textAlign: "center",
  },
});

export default LoginPage;
