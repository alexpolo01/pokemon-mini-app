/**
 * Label.tsx
 * Styled text component for displaying headings and labels.
 */

import React from "react";
import { StyleSheet, Text } from "react-native";
import { LabelProps } from "../types/types";

const Label: React.FC<LabelProps> = ({ text, style }) => {
  return <Text style={[styles.label, style]}>{text}</Text>;
};

const styles = StyleSheet.create({
  label: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    textAlign: "center",
    marginVertical: 16,
  },
});

export default Label;
