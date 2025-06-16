import { ApiResult } from "@/features/apiClient";
import { Game } from "../../domain/entities/game";
import { GameRepository } from "../../domain/repository/gameRepository";

export class GameRepositoryImp extends GameRepository {
    constructor(private readonly datasource: GameRepository) {
        super();
    }
    getGameById(id: number): Promise<ApiResult<Game>> {
        return this.datasource.getGameById(id);
    }
    getAllGames(): Promise<ApiResult<Game[]>> {
        return this.datasource.getAllGames();
    }
    createGame(game: Game): Promise<ApiResult<Game>> {
        return this.datasource.createGame(game);
    }
    updateGame(id: number, game: Game): Promise<ApiResult<Game>> {
        return this.datasource.updateGame(id, game);
    }
    deleteGame(id: number): Promise<ApiResult<Game>> {
        return this.datasource.deleteGame(id);
    }
}
