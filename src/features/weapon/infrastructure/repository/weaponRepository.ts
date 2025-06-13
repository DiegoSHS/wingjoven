import { ApiResult } from "@/features/apiClient";
import { WeaponRepository } from "../../domain/repository/weaponRespository";
import { Weapon } from "../../domain/entities/weapon";

export class WeaponDatasourceImp extends WeaponRepository {
    constructor(
        private readonly weaponDatasource: WeaponRepository
    ) {
        super();
    }

    getWeaponById(id: number): Promise<ApiResult<Weapon>> {
        return this.weaponDatasource.getWeaponById(id);
    }

    getAllWeapons(): Promise<ApiResult<Weapon[]>> {
        return this.weaponDatasource.getAllWeapons();
    }

    createWeapon(weapon: Weapon): Promise<ApiResult<Weapon>> {
        return this.weaponDatasource.createWeapon(weapon);
    }

    updateWeapon(id: number, weapon: Weapon): Promise<ApiResult<Weapon>> {
        return this.weaponDatasource.updateWeapon(id, weapon);
    }

    deleteWeapon(id: number): Promise<ApiResult<Weapon>> {
        return this.weaponDatasource.deleteWeapon(id);
    }
}