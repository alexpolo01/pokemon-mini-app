/**
 * PokemonItem.tsx
 * List item component displaying Pokemon sprite, ID, and name.
 * Tappable to navigate to Pokemon details.
 */

import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PokemonItemProps } from "../types/types";
import Card from "./Card";

const PokemonItem: React.FC<PokemonItemProps> = ({ pokemon, onPress }) => {
  // Extract Pokemon ID from URL to get the sprite image
  const getPokemonId = (url: string): string => {
    const matches = url.match(/\/pokemon\/(\d+)\//);
    return matches ? matches[1] : "1";
  };

  const pokemonId = getPokemonId(pokemon.url);
  const spriteUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  const formatName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  return (
    <TouchableOpacity onPress={() => onPress(pokemon.url)} activeOpacity={0.7}>
      <Card style={styles.card}>
        <View style={styles.container}>
          <Image
            source={{ uri: spriteUrl }}
            style={styles.sprite}
            resizeMode="contain"
          />
          <View style={styles.info}>
            <Text style={styles.id}>#{pokemonId.padStart(3, "0")}</Text>
            <Text style={styles.name}>{formatName(pokemon.name)}</Text>
          </View>
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 16,
    marginVertical: 6,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  sprite: {
    width: 70,
    height: 70,
  },
  info: {
    marginLeft: 16,
    flex: 1,
  },
  id: {
    fontSize: 12,
    color: "#888",
    fontWeight: "500",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
});

export default PokemonItem;
