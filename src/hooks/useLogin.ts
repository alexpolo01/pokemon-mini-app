/**
 * useLogin.ts
 * Custom hook managing login form state and authentication logic.
 * Handles email/password input and navigation to Home screen.
 */

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useState } from "react";
import { RootStackParamList } from "../types/types";

type LoginNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

export const useLogin = () => {
  const navigation = useNavigation<LoginNavigationProp>();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isFormValid = email.trim() !== "" && password.trim() !== "";

  const handleEmailChange = useCallback((text: string) => {
    setEmail(text);
  }, []);

  const handlePasswordChange = useCallback((text: string) => {
    setPassword(text);
  }, []);

  const handleLogin = useCallback(async () => {
    if (!isFormValid) return;

    setIsLoading(true);
    try {
      // Simulate login delay
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigation.replace("Home");
    } catch (error) {
      console.error("Login error:", error);
    } finally {
      setIsLoading(false);
    }
  }, [isFormValid, navigation]);

  return {
    email,
    password,
    isFormValid,
    isLoading,
    handleEmailChange,
    handlePasswordChange,
    handleLogin,
  };
};

export default useLogin;
