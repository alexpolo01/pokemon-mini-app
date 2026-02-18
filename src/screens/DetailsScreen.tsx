/**
 * DetailsScreen.tsx
 * Pokemon detail view showing stats, abilities, types, and artwork.
 * Fetches data based on the URL passed from the Home screen.
 */

import { RouteProp, useRoute } from "@react-navigation/native";
import React from "react";
import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import { Card } from "../components";
import { useDetails } from "../hooks";
import { RootStackParamList } from "../types/types";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const DetailsScreen: React.FC = () => {
  const route = useRoute<DetailsRouteProp>();
  const { url } = route.params;

  const { pokemon, isLoading, formatName, spriteUrl } = useDetails(url);

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#EF5350" />
      </View>
    );
  }

  if (!pokemon) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Failed to load Pokemon details</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.id}>#{pokemon.id.toString().padStart(3, "0")}</Text>
        <Text style={styles.name}>{formatName(pokemon.name)}</Text>

        <View style={styles.typesContainer}>
          {pokemon.types.map((typeInfo) => (
            <View key={typeInfo.type.name} style={styles.typeTag}>
              <Text style={styles.typeText}>
                {formatName(typeInfo.type.name)}
              </Text>
            </View>
          ))}
        </View>
      </View>

      {spriteUrl && (
        <Image
          source={{ uri: spriteUrl }}
          style={styles.sprite}
          resizeMode="contain"
        />
      )}

      <Card style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Basic Info</Text>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Height</Text>
            <Text style={styles.infoValue}>
              {(pokemon.height / 10).toFixed(1)} m
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Weight</Text>
            <Text style={styles.infoValue}>
              {(pokemon.weight / 10).toFixed(1)} kg
            </Text>
          </View>
          <View style={styles.infoItem}>
            <Text style={styles.infoLabel}>Base Exp</Text>
            <Text style={styles.infoValue}>{pokemon.base_experience}</Text>
          </View>
        </View>
      </Card>

      <Card style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Stats</Text>
        {pokemon.stats.map((stat) => (
          <View key={stat.stat.name} style={styles.statRow}>
            <Text style={styles.statName}>
              {formatName(stat.stat.name.replace("-", " "))}
            </Text>
            <View style={styles.statBarContainer}>
              <View
                style={[
                  styles.statBar,
                  { width: `${Math.min(stat.base_stat, 100)}%` },
                ]}
              />
            </View>
            <Text style={styles.statValue}>{stat.base_stat}</Text>
          </View>
        ))}
      </Card>

      <Card style={styles.infoCard}>
        <Text style={styles.sectionTitle}>Abilities</Text>
        <View style={styles.abilitiesContainer}>
          {pokemon.abilities.map((abilityInfo) => (
            <View key={abilityInfo.ability.name} style={styles.abilityTag}>
              <Text style={styles.abilityText}>
                {formatName(abilityInfo.ability.name.replace("-", " "))}
                {abilityInfo.is_hidden && " (Hidden)"}
              </Text>
            </View>
          ))}
        </View>
      </Card>
    </ScrollView>
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
  errorText: {
    fontSize: 16,
    color: "#888",
  },
  header: {
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  id: {
    fontSize: 14,
    color: "#888",
    fontWeight: "500",
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  typesContainer: {
    flexDirection: "row",
    marginTop: 12,
  },
  typeTag: {
    backgroundColor: "#EF5350",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginHorizontal: 4,
  },
  typeText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "600",
  },
  sprite: {
    width: 200,
    height: 200,
    alignSelf: "center",
    marginVertical: 16,
  },
  infoCard: {
    marginHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  infoItem: {
    alignItems: "center",
  },
  infoLabel: {
    fontSize: 12,
    color: "#888",
  },
  infoValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginTop: 4,
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  statName: {
    width: 100,
    fontSize: 12,
    color: "#666",
    textTransform: "capitalize",
  },
  statBarContainer: {
    flex: 1,
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 4,
    marginHorizontal: 8,
  },
  statBar: {
    height: "100%",
    backgroundColor: "#EF5350",
    borderRadius: 4,
  },
  statValue: {
    width: 35,
    fontSize: 12,
    fontWeight: "bold",
    color: "#333",
    textAlign: "right",
  },
  abilitiesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  abilityTag: {
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  abilityText: {
    fontSize: 14,
    color: "#333",
  },
});

export default DetailsScreen;
