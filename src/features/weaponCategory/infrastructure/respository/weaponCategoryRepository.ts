import { ApiResult } from "@/features/apiClient";
import { WeaponCategory } from "../../domain/entities/weaponCategory";
import { WeaponCategoryRepository } from "../../domain/repository/weaponCategoryRespository";

export class WeaponCategoryRepositoryImp extends WeaponCategoryRepository {
    constructor(
        private readonly weaponCategoryDatasource: WeaponCategoryRepository
    ) {
        super();
    }

    getWeaponCategoryById(id: number): Promise<ApiResult<WeaponCategory>> {
        return this.weaponCategoryDatasource.getWeaponCategoryById(id);
    }

    getAllWeaponCategories(): Promise<ApiResult<WeaponCategory[]>> {
        return this.weaponCategoryDatasource.getAllWeaponCategories();
    }

    createWeaponCategory(weaponCategory: WeaponCategory): Promise<ApiResult<WeaponCategory>> {
        return this.weaponCategoryDatasource.createWeaponCategory(weaponCategory);
    }

    updateWeaponCategory(id: number, weaponCategory: WeaponCategory): Promise<ApiResult<WeaponCategory>> {
        return this.weaponCategoryDatasource.updateWeaponCategory(id, weaponCategory);
    }

    deleteWeaponCategory(id: number): Promise<ApiResult<WeaponCategory>> {
        return this.weaponCategoryDatasource.deleteWeaponCategory(id);
    }
}