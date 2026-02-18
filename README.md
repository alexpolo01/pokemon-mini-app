# Pokemon Mini App

A React Native mobile application built with Expo that displays Pokemon data from PokeAPI.

## Features

- Login screen with email and password validation
- Browse Pokemon with lazy loading pagination
- Pull-to-refresh support
- View detailed Pokemon information including stats, abilities, and types
- Clean component architecture with reusable UI components

## Project Structure

```
src/
  backend/        - API service for PokeAPI requests
  components/     - Reusable UI components (Input, Password, Button, Card, Label, PokemonItem)
  hooks/          - Custom React hooks (useLogin, useHome, useDetails)
  screens/        - Screen components (LoginScreen, HomeScreen, DetailsScreen)
  types/          - TypeScript type definitions
  AppNavigator.tsx - Navigation configuration
```

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development) or Xcode (for iOS development)
- Expo Go app on your mobile device (optional, for testing on physical device)

## Setup Instructions

1. Clone the repository

   ```bash
   git clone <repository-url>
   cd pokemon-mini-app
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Start the development server

   ```bash
   npx expo start
   ```

4. Run on device or emulator
   - Press `a` to open on Android emulator
   - Press `i` to open on iOS simulator
   - Scan QR code with Expo Go app on your mobile device

## Available Scripts

- `npm start` - Start Expo development server
- `npm run android` - Run on Android device/emulator
- `npm run ios` - Run on iOS simulator
- `npm run web` - Run in web browser
- `npm run lint` - Run ESLint

## API Reference

This app uses the [PokeAPI](https://pokeapi.co/) to fetch Pokemon data:

- List endpoint: `https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`
- Details endpoint: `https://pokeapi.co/api/v2/pokemon/{id}/`

## Technologies Used

- React Native
- Expo
- TypeScript
- React Navigation
- PokeAPI
