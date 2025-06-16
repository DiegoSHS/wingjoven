import { ApiClient, ApiResult } from "@/features/apiClient";
import { WeaponDatasource } from "../../domain/datasources/weaponDatasource";
import { Weapon } from "../../domain/entities/weapon";

export class WeaponDatasourceImp extends WeaponDatasource {
    async getWeaponById(id: number): Promise<ApiResult<Weapon>> {
        const { data } = await ApiClient.get<ApiResult<Weapon>>('/weapon', {
            params: { id }
        })
        return data
    }

    async getAllWeapons(): Promise<ApiResult<Weapon[]>> {
        const { data } = await ApiClient.get<ApiResult<Weapon[]>>('/weapon');
        return data;
    }

    async createWeapon(weapon: Weapon): Promise<ApiResult<Weapon>> {
        const { data } = await ApiClient.post<ApiResult<Weapon>>('/weapon', weapon);
        return data;
    }

    async updateWeapon(id: number, weapon: Weapon): Promise<ApiResult<Weapon>> {
        const { data } = await ApiClient.put<ApiResult<Weapon>>(`/weapon/${id}`, weapon);
        return data;
    }

    async deleteWeapon(id: number): Promise<ApiResult<Weapon>> {
        const { data } = await ApiClient.delete<ApiResult<Weapon>>(`/weapon/${id}`);
        return data
    }
}