/**
 * HomeScreen.tsx
 * Main screen displaying a scrollable list of Pokemon.
 * Supports lazy loading and pull-to-refresh functionality.
 */

import React from "react";
import {
    ActivityIndicator,
    FlatList,
    RefreshControl,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Label, PokemonItem } from "../components";
import { useHome } from "../hooks";
import { PokemonListItem } from "../types/types";

const HomeScreen: React.FC = () => {
  const {
    pokemonList,
    isLoading,
    isLoadingMore,
    loadMore,
    handlePokemonPress,
    refresh,
  } = useHome();

  const renderItem = ({ item }: { item: PokemonListItem }) => (
    <PokemonItem pokemon={item} onPress={handlePokemonPress} />
  );

  const renderFooter = () => {
    if (!isLoadingMore) return null;
    return (
      <View style={styles.footer}>
        <ActivityIndicator size="small" color="#EF5350" />
      </View>
    );
  };

  const renderEmpty = () => {
    if (isLoading) return null;
    return (
      <View style={styles.empty}>
        <Text style={styles.emptyText}>No Pokemon found</Text>
      </View>
    );
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#EF5350" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Label text="Go Pokemon!" style={styles.title} />
      <FlatList
        data={pokemonList}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={renderFooter}
        ListEmptyComponent={renderEmpty}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={refresh}
            colors={["#EF5350"]}
            tintColor="#EF5350"
          />
        }
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 28,
    color: "#EF5350",
    paddingTop: 16,
  },
  listContent: {
    paddingBottom: 16,
  },
  footer: {
    paddingVertical: 20,
    alignItems: "center",
  },
  empty: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 16,
    color: "#888",
  },
});

export default HomeScreen;
