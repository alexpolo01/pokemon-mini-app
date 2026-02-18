/**
 * useHome.ts
 * Custom hook managing Pokemon list data fetching and lazy loading.
 * Supports pagination, pull-to-refresh, and navigation to details.
 */

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useCallback, useEffect, useState } from "react";
import { api } from "../backend/api";
import { PokemonListItem, RootStackParamList } from "../types/types";

type HomeNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

const LIMIT = 20;

export const useHome = () => {
  const navigation = useNavigation<HomeNavigationProp>();
  const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([]);
  const [offset, setOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const fetchPokemon = useCallback(
    async (currentOffset: number, isInitial: boolean = false) => {
      if (isInitial) {
        setIsLoading(true);
      } else {
        setIsLoadingMore(true);
      }

      try {
        const response = await api.getPokemonList(currentOffset, LIMIT);

        if (isInitial) {
          setPokemonList(response.results);
        } else {
          setPokemonList((prev) => [...prev, ...response.results]);
        }

        setHasMore(response.next !== null);
      } catch (error) {
        console.error("Error fetching pokemon:", error);
      } finally {
        setIsLoading(false);
        setIsLoadingMore(false);
      }
    },
    [],
  );

  useEffect(() => {
    fetchPokemon(0, true);
  }, [fetchPokemon]);

  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMore) return;

    const newOffset = offset + LIMIT;
    setOffset(newOffset);
    fetchPokemon(newOffset, false);
  }, [offset, isLoadingMore, hasMore, fetchPokemon]);

  const handlePokemonPress = useCallback(
    (url: string) => {
      navigation.navigate("Details", { url });
    },
    [navigation],
  );

  const refresh = useCallback(async () => {
    setOffset(0);
    await fetchPokemon(0, true);
  }, [fetchPokemon]);

  return {
    pokemonList,
    isLoading,
    isLoadingMore,
    hasMore,
    loadMore,
    handlePokemonPress,
    refresh,
  };
};

export default useHome;
