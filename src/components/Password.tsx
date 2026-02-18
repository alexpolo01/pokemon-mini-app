/**
 * Password.tsx
 * Secure text input component with show/hide password toggle button.
 */

import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { InputProps } from "../types/types";

const Password: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder = "Password",
  autoCapitalize = "none",
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={!showPassword}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#999"
      />
      <TouchableOpacity
        style={styles.eyeButton}
        onPress={togglePasswordVisibility}
      >
        <Ionicons
          name={showPassword ? "eye-outline" : "eye-off-outline"}
          size={22}
          color="#666"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: "#000",
  },
  eyeButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Password;
