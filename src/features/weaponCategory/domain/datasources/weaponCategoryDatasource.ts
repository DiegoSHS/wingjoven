import { ApiResult } from "@/features/apiClient";
import { WeaponCategory } from "../entities/weaponCategory";

export abstract class WeaponCategoryDatasource {
    abstract getWeaponCategoryById(id: number): Promise<ApiResult<WeaponCategory>>;
    abstract getAllWeaponCategories(): Promise<ApiResult<WeaponCategory[]>>;
    abstract createWeaponCategory(weaponCategory: WeaponCategory): Promise<ApiResult<WeaponCategory>>;
    abstract updateWeaponCategory(id: number, weaponCategory: WeaponCategory): Promise<ApiResult<WeaponCategory>>;
    abstract deleteWeaponCategory(id: number): Promise<ApiResult<WeaponCategory>>;
}