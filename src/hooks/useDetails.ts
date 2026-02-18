/**
 * useDetails.ts
 * Custom hook managing Pokemon details fetching and state.
 * Retrieves detailed Pokemon data based on the provided URL.
 */

import { useEffect, useState } from "react";
import { api } from "../backend/api";
import { PokemonDetails } from "../types/types";

export const useDetails = (url: string) => {
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const data = await api.getPokemonDetails(url);
        setPokemon(data);
      } catch (error) {
        console.error("Error fetching pokemon details:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchDetails();
  }, [url]);

  // Format Pokemon name with first letter capitalized
  const formatName = (name: string): string => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };

  // Get the best available sprite URL
  const spriteUrl = pokemon
    ? pokemon.sprites.other?.["official-artwork"]?.front_default ||
      pokemon.sprites.front_default
    : null;

  return {
    pokemon,
    isLoading,
    formatName,
    spriteUrl,
  };
};

export default useDetails;
