/**
 * AppNavigator.tsx
 * Main navigation configuration using React Navigation stack navigator.
 * Defines screen routes: Login, Home, and Details.
 */

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { DetailsScreen, HomeScreen, LoginScreen } from "./screens";
import { RootStackParamList } from "./types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#EF5350",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: "Pokemon",
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: "Pokemon Details" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
