import { ApiClient, ApiResult } from "@/features/apiClient";
import { LoadoutDatasource } from "../../domain/datasources/loadoutDatasource";
import { Loadout } from "../../domain/entities/loadout";

export class LoadoutDatasourceImp extends LoadoutDatasource {
    async getLoadoutById(id: number): Promise<ApiResult<Loadout>> {
        const { data } = await ApiClient.get<ApiResult<Loadout>>('/loadout', { params: { id } });
        return data;
    }
    async getAllLoadouts(): Promise<ApiResult<Loadout[]>> {
        const { data } = await ApiClient.get<ApiResult<Loadout[]>>('/loadout');
        return data;
    }
    async createLoadout(loadout: Loadout): Promise<ApiResult<Loadout>> {
        const { data } = await ApiClient.post<ApiResult<Loadout>>('/loadout', loadout);
        return data;
    }
    async updateLoadout(id: number, loadout: Loadout): Promise<ApiResult<Loadout>> {
        const { data } = await ApiClient.put<ApiResult<Loadout>>(`/loadout/${id}`, loadout);
        return data;
    }
    async deleteLoadout(id: number): Promise<ApiResult<Loadout>> {
        const { data } = await ApiClient.delete<ApiResult<Loadout>>(`/loadout/${id}`);
        return data;
    }
}
