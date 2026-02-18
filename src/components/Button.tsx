/**
 * Button.tsx
 * Customizable button component with disabled state support.
 */

import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ButtonProps } from "../types/types";

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  style,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <Text style={[styles.text, disabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#EF5350",
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
  },
  disabled: {
    backgroundColor: "#ccc",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledText: {
    color: "#999",
  },
});

export default Button;
