import { ApiClient, ApiResult } from "@/features/apiClient";
import { AttachmentCategoryDatasource } from "../../domain/datasources/attachmentCategoryDatasource";
import { AttachmentCategory } from "../../domain/entities/attachmentCategory";

export class AttachmentCategoryDatasourceImp extends AttachmentCategoryDatasource {
    async getAttachmentCategoryById(id: number): Promise<ApiResult<AttachmentCategory>> {
        const { data } = await ApiClient.get<ApiResult<AttachmentCategory>>('/attachment-category', { params: { id } });
        return data;
    }
    async getAllAttachmentCategories(): Promise<ApiResult<AttachmentCategory[]>> {
        const { data } = await ApiClient.get<ApiResult<AttachmentCategory[]>>('/attachment-category');
        return data;
    }
    async createAttachmentCategory(attachmentCategory: AttachmentCategory): Promise<ApiResult<AttachmentCategory>> {
        const { data } = await ApiClient.post<ApiResult<AttachmentCategory>>('/attachment-category', attachmentCategory);
        return data;
    }
    async updateAttachmentCategory(id: number, attachmentCategory: AttachmentCategory): Promise<ApiResult<AttachmentCategory>> {
        const { data } = await ApiClient.put<ApiResult<AttachmentCategory>>(`/attachment-category/${id}`, attachmentCategory);
        return data;
    }
    async deleteAttachmentCategory(id: number): Promise<ApiResult<AttachmentCategory>> {
        const { data } = await ApiClient.delete<ApiResult<AttachmentCategory>>(`/attachment-category/${id}`);
        return data;
    }
}
