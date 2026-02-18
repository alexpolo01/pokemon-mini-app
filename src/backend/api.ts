/**
 * api.ts
 * API service for fetching Pokemon data from PokeAPI.
 * Provides methods for retrieving Pokemon list and individual details.
 */

import { PokemonDetails, PokemonListResponse } from "../types/types";

// Base URL for all PokeAPI requests
const BASE_URL = "https://pokeapi.co/api/v2";

async function get<T>(endpoint: string): Promise<T> {
  const url = endpoint.startsWith("http") ? endpoint : `${BASE_URL}${endpoint}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}

export const api = {
  getPokemonList: (
    offset: number = 0,
    limit: number = 20,
  ): Promise<PokemonListResponse> => {
    return get<PokemonListResponse>(`/pokemon?offset=${offset}&limit=${limit}`);
  },

  getPokemonDetails: (url: string): Promise<PokemonDetails> => {
    return get<PokemonDetails>(url);
  },
};

export default api;
