import { ApiResult } from "@/features/apiClient";
import { WeaponAttachment } from "../entities/weaponAttachment";

export abstract class WeaponAttachmentRepository {
    abstract getWeaponAttachmentById(id: number): Promise<ApiResult<WeaponAttachment>>;
    abstract getAllWeaponAttachments(): Promise<ApiResult<WeaponAttachment[]>>;
    abstract createWeaponAttachment(weaponAttachment: WeaponAttachment): Promise<ApiResult<WeaponAttachment>>;
    abstract updateWeaponAttachment(id: number, weaponAttachment: WeaponAttachment): Promise<ApiResult<WeaponAttachment>>;
    abstract deleteWeaponAttachment(id: number): Promise<ApiResult<WeaponAttachment>>;
}
