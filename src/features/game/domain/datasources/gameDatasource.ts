import { ApiResult } from "@/features/apiClient";
import { Game } from "../entities/game";

export abstract class GameDatasource {
    abstract getGameById(id: number): Promise<ApiResult<Game>>;
    abstract getAllGames(): Promise<ApiResult<Game[]>>;
    abstract createGame(game: Game): Promise<ApiResult<Game>>;
    abstract updateGame(id: number, game: Game): Promise<ApiResult<Game>>;
    abstract deleteGame(id: number): Promise<ApiResult<Game>>;
}
