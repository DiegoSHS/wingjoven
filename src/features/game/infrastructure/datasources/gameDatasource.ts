import { ApiClient, ApiResult } from "@/features/apiClient";
import { GameDatasource } from "../../domain/datasources/gameDatasource";
import { Game } from "../../domain/entities/game";

export class GameDatasourceImp extends GameDatasource {
    async getGameById(id: number): Promise<ApiResult<Game>> {
        const { data } = await ApiClient.get<ApiResult<Game>>('/game', { params: { id } });
        return data;
    }
    async getAllGames(): Promise<ApiResult<Game[]>> {
        const { data } = await ApiClient.get<ApiResult<Game[]>>('/game');
        return data;
    }
    async createGame(game: Game): Promise<ApiResult<Game>> {
        const { data } = await ApiClient.post<ApiResult<Game>>('/game', game);
        return data;
    }
    async updateGame(id: number, game: Game): Promise<ApiResult<Game>> {
        const { data } = await ApiClient.put<ApiResult<Game>>(`/game/${id}`, game);
        return data;
    }
    async deleteGame(id: number): Promise<ApiResult<Game>> {
        const { data } = await ApiClient.delete<ApiResult<Game>>(`/game/${id}`);
        return data;
    }
}
