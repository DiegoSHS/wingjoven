import { ApiResult } from "@/features/apiClient";
import { Weapon } from "../entities/weapon";

export abstract class WeaponDatasource {
    abstract getWeaponById(id: number): Promise<ApiResult<Weapon>>;
    abstract getAllWeapons(): Promise<ApiResult<Weapon[]>>;
    abstract createWeapon(weapon: Weapon): Promise<ApiResult<Weapon>>;
    abstract updateWeapon(id: number, weapon: Weapon): Promise<ApiResult<Weapon>>;
    abstract deleteWeapon(id: number): Promise<ApiResult<Weapon>>;
}