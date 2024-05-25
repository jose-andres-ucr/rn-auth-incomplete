import { Link } from "expo-router";
import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Pressable,
  Text,
} from "react-native";

const SignIn = () => {
  return (
    <View style={styles.container}>
      <TextInput
        autoCapitalize="none"
        placeholder="email@email.com"
        style={styles.inputField}
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        style={styles.inputField}
      />

      <Button title="Login" color={"#6c47ff"}></Button>

      <Link href="/register" asChild>
        <Pressable style={styles.button}>
          <Text>Create Account</Text>
        </Pressable>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  inputField: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: "#6c47ff",
    borderRadius: 4,
    padding: 10,
    backgroundColor: "#fff",
  },
  button: {
    margin: 8,
    alignItems: "center",
  },
});
export default SignIn;
