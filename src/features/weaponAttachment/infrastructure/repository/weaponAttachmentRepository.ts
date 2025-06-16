import { ApiResult } from "@/features/apiClient";
import { WeaponAttachment } from "../../domain/entities/weaponAttachment";
import { WeaponAttachmentRepository } from "../../domain/repository/weaponAttachmentRepository";

export class WeaponAttachmentRepositoryImp extends WeaponAttachmentRepository {
    constructor(private readonly datasource: WeaponAttachmentRepository) {
        super();
    }
    getWeaponAttachmentById(id: number): Promise<ApiResult<WeaponAttachment>> {
        return this.datasource.getWeaponAttachmentById(id);
    }
    getAllWeaponAttachments(): Promise<ApiResult<WeaponAttachment[]>> {
        return this.datasource.getAllWeaponAttachments();
    }
    createWeaponAttachment(weaponAttachment: WeaponAttachment): Promise<ApiResult<WeaponAttachment>> {
        return this.datasource.createWeaponAttachment(weaponAttachment);
    }
    updateWeaponAttachment(id: number, weaponAttachment: WeaponAttachment): Promise<ApiResult<WeaponAttachment>> {
        return this.datasource.updateWeaponAttachment(id, weaponAttachment);
    }
    deleteWeaponAttachment(id: number): Promise<ApiResult<WeaponAttachment>> {
        return this.datasource.deleteWeaponAttachment(id);
    }
}
