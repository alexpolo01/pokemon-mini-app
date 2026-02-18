/**
 * LoginScreen.tsx
 * Authentication screen with email and password inputs.
 * Login button is enabled when both fields are filled.
 */

import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, View } from "react-native";
import { Button, Input, Label, Password } from "../components";
import { useLogin } from "../hooks";

const LoginScreen: React.FC = () => {
  const {
    email,
    password,
    isFormValid,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  } = useLogin();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.content}>
        <Label text="Go Pokemon!" style={styles.title} />

        <View style={styles.form}>
          <Input
            value={email}
            onChangeText={handleEmailChange}
            placeholder="Email Address"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Password
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="Password"
          />

          <Button
            title={isLoading ? "Logging in..." : "Login"}
            onPress={handleLogin}
            disabled={!isFormValid || isLoading}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 32,
    color: "#EF5350",
    marginBottom: 32,
  },
  form: {
    width: "100%",
  },
});

export default LoginScreen;
