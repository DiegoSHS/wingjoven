import { ApiResult } from "@/features/apiClient";
import { Attachment } from "../entities/attachment";

export abstract class AttachmentDatasource {
    abstract getAttachmentById(id: number): Promise<ApiResult<Attachment>>;
    abstract getAllAttachments(): Promise<ApiResult<Attachment[]>>;
    abstract createAttachment(attachment: Attachment): Promise<ApiResult<Attachment>>;
    abstract updateAttachment(id: number, attachment: Attachment): Promise<ApiResult<Attachment>>;
    abstract deleteAttachment(id: number): Promise<ApiResult<Attachment>>;
}