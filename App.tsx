/**
 * App.tsx
 * Root component of the Pokemon Mini App.
 * Sets up SafeAreaProvider and renders the main navigation.
 */

import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppNavigator from "./src/AppNavigator";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
