import { ApiClient, ApiResult } from "@/features/apiClient";
import { AttachmentDatasource } from "../../domain/datasources/attachmentDatasource";
import { Attachment } from "../../domain/entities/attachment";

export class AttachmentDatasourceImp extends AttachmentDatasource {
    async getAttachmentById(id: number): Promise<ApiResult<Attachment>> {
        const { data } = await ApiClient.get<ApiResult<Attachment>>('/attachment', {
            params: { id }
        });
        return data;
    }

    async getAllAttachments(): Promise<ApiResult<Attachment[]>> {
        const { data } = await ApiClient.get<ApiResult<Attachment[]>>('/attachment');
        return data;
    }

    async createAttachment(attachment: Attachment): Promise<ApiResult<Attachment>> {
        const { data } = await ApiClient.post<ApiResult<Attachment>>('/attachment', attachment);
        return data;
    }

    async updateAttachment(id: number, attachment: Attachment): Promise<ApiResult<Attachment>> {
        const { data } = await ApiClient.put<ApiResult<Attachment>>(`/attachment/${id}`, attachment);
        return data;
    }

    async deleteAttachment(id: number): Promise<ApiResult<Attachment>> {
        const { data } = await ApiClient.delete<ApiResult<Attachment>>(`/attachment/${id}`);
        return data;
    }
}