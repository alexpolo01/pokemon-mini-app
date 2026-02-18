/**
 * types.ts
 * Centralized type definitions for the Pokemon Mini App.
 * Contains interfaces for API responses, component props, and navigation.
 */

// Pokemon API Types
export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: PokemonListItem[];
}

export interface PokemonSprites {
  front_default: string | null;
  front_shiny: string | null;
  back_default: string | null;
  back_shiny: string | null;
  other?: {
    "official-artwork"?: {
      front_default: string | null;
    };
  };
}

export interface PokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonStat {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

export interface PokemonAbility {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

export interface PokemonDetails {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: PokemonSprites;
  types: PokemonType[];
  stats: PokemonStat[];
  abilities: PokemonAbility[];
  base_experience: number;
}

// Component Props Types
export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

export interface PasswordProps extends InputProps {
  showPassword?: boolean;
  onTogglePassword?: () => void;
}

export interface LabelProps {
  text: string;
  style?: object;
}

export interface CardProps {
  children: React.ReactNode;
  style?: object;
}

export interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: object;
}

export interface PokemonItemProps {
  pokemon: PokemonListItem;
  onPress: (url: string) => void;
}

// Navigation Types
export type RootStackParamList = {
  Login: undefined;
  Home: undefined;
  Details: { url: string };
};
