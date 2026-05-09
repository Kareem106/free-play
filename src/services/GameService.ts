import { client } from "./client";
export type GameGenre =
  | "Shooter"
  | "MMORPG"
  | "MOBA"
  | "Strategy"
  | "Fighting"
  | "Card Game"
  | "Racing"
  | "Sports"
  | "Action RPG"
  | string; // fallback for unknown genres

export type GamePlatform =
  | "PC (Windows)"
  | "Web Browser"
  | "PC (Windows), Web Browser"
  | string; // fallback for unknown platforms

export interface Game {
  id: number;
  title: string;
  thumbnail: string; // URL to thumbnail image
  short_description: string;
  game_url: string; // URL to open/play the game
  genre: GameGenre;
  platform: GamePlatform;
  publisher: string;
  developer: string;
  release_date: string; // ISO 8601 format: "YYYY-MM-DD"
  freetogame_profile_url: string; // URL to game profile
}

class GameService {
  async getAllGames(): Promise<Game[]> {
    const response = await client.get<Game[]>("/games");
    return response.data;

  }
}

export const gameService = new GameService();
