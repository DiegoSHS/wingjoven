import { ApiClient, ApiResult } from "@/features/apiClient";
import { WeaponCategoryDatasource } from "../../domain/datasources/weaponCategoryDatasource";
import { WeaponCategory } from "../../domain/entities/weaponCategory";

export class WeaponCategoryDatasourceImp extends WeaponCategoryDatasource {
    async createWeaponCategory(weaponCategory: WeaponCategory): Promise<ApiResult<WeaponCategory>> {
        const { data } = await ApiClient.post<ApiResult<WeaponCategory>>('/weapon-category', weaponCategory);
        return data;
    }
    async getAllWeaponCategories(): Promise<ApiResult<WeaponCategory[]>> {
        const { data } = await ApiClient.get<ApiResult<WeaponCategory[]>>('/weapon-category');
        return data;
    }
    async getWeaponCategoryById(id: number): Promise<ApiResult<WeaponCategory>> {
        const { data } = await ApiClient.get<ApiResult<WeaponCategory>>("/weapon-category/", {
            params: {
                id
            }
        });
        return data;
    }
    async updateWeaponCategory(id: number, weaponCategory: WeaponCategory): Promise<ApiResult<WeaponCategory>> {
        const { data } = await ApiClient.put<ApiResult<WeaponCategory>>(`/weapon-category/${id}`, weaponCategory);
        return data;
    }
    async deleteWeaponCategory(id: number): Promise<ApiResult<WeaponCategory>> {
        const { data } = await ApiClient.delete<ApiResult<WeaponCategory>>(`/weapon-category/${id}`);
        return data;
    }
}