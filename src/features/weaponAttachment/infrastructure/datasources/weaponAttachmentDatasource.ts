import { ApiClient, ApiResult } from "@/features/apiClient";
import { WeaponAttachmentDatasource } from "../../domain/datasources/weaponAttachmentDatasource";
import { WeaponAttachment } from "../../domain/entities/weaponAttachment";

export class WeaponAttachmentDatasourceImp extends WeaponAttachmentDatasource {
    async getWeaponAttachmentById(id: number): Promise<ApiResult<WeaponAttachment>> {
        const { data } = await ApiClient.get<ApiResult<WeaponAttachment>>('/weapon-attachment', { params: { id } });
        return data;
    }
    async getAllWeaponAttachments(): Promise<ApiResult<WeaponAttachment[]>> {
        const { data } = await ApiClient.get<ApiResult<WeaponAttachment[]>>('/weapon-attachment');
        return data;
    }
    async createWeaponAttachment(weaponAttachment: WeaponAttachment): Promise<ApiResult<WeaponAttachment>> {
        const { data } = await ApiClient.post<ApiResult<WeaponAttachment>>('/weapon-attachment', weaponAttachment);
        return data;
    }
    async updateWeaponAttachment(id: number, weaponAttachment: WeaponAttachment): Promise<ApiResult<WeaponAttachment>> {
        const { data } = await ApiClient.put<ApiResult<WeaponAttachment>>(`/weapon-attachment/${id}`, weaponAttachment);
        return data;
    }
    async deleteWeaponAttachment(id: number): Promise<ApiResult<WeaponAttachment>> {
        const { data } = await ApiClient.delete<ApiResult<WeaponAttachment>>(`/weapon-attachment/${id}`);
        return data;
    }
}
