/**
 * Input.tsx
 * Reusable text input component with customizable keyboard type and styling.
 */

import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { InputProps } from "../types/types";

const Input: React.FC<InputProps> = ({
  value,
  onChangeText,
  placeholder,
  keyboardType = "default",
  autoCapitalize = "none",
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
        placeholderTextColor="#999"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: "#fff",
  },
});

export default Input;
