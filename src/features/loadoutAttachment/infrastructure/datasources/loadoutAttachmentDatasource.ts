import { ApiClient, ApiResult } from "@/features/apiClient";
import { LoadoutAttachmentDatasource } from "../../domain/datasources/loadoutAttachmentDatasource";
import { LoadoutAttachment } from "../../domain/entities/loadoutAttachment";

export class LoadoutAttachmentDatasourceImp extends LoadoutAttachmentDatasource {
    async getLoadoutAttachmentById(id: number): Promise<ApiResult<LoadoutAttachment>> {
        const { data } = await ApiClient.get<ApiResult<LoadoutAttachment>>('/loadout-attachment', { params: { id } });
        return data;
    }
    async getAllLoadoutAttachments(): Promise<ApiResult<LoadoutAttachment[]>> {
        const { data } = await ApiClient.get<ApiResult<LoadoutAttachment[]>>('/loadout-attachment');
        return data;
    }
    async createLoadoutAttachment(loadoutAttachment: LoadoutAttachment): Promise<ApiResult<LoadoutAttachment>> {
        const { data } = await ApiClient.post<ApiResult<LoadoutAttachment>>('/loadout-attachment', loadoutAttachment);
        return data;
    }
    async updateLoadoutAttachment(id: number, loadoutAttachment: LoadoutAttachment): Promise<ApiResult<LoadoutAttachment>> {
        const { data } = await ApiClient.put<ApiResult<LoadoutAttachment>>(`/loadout-attachment/${id}`, loadoutAttachment);
        return data;
    }
    async deleteLoadoutAttachment(id: number): Promise<ApiResult<LoadoutAttachment>> {
        const { data } = await ApiClient.delete<ApiResult<LoadoutAttachment>>(`/loadout-attachment/${id}`);
        return data;
    }
}
