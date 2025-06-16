import { ApiResult } from "@/features/apiClient";
import { Attachment } from "../../domain/entities/attachment";
import { AttachmentRepository } from "../../domain/repository/attachmentRepository";

export class AttachmentRepositoryImp extends AttachmentRepository {
    constructor(private readonly datasource: AttachmentRepository) {
        super();
    }
    getAttachmentById(id: number): Promise<ApiResult<Attachment>> {
        return this.datasource.getAttachmentById(id);
    }
    getAllAttachments(): Promise<ApiResult<Attachment[]>> {
        return this.datasource.getAllAttachments();
    }
    createAttachment(attachment: Attachment): Promise<ApiResult<Attachment>> {
        return this.datasource.createAttachment(attachment);
    }
    updateAttachment(id: number, attachment: Attachment): Promise<ApiResult<Attachment>> {
        return this.datasource.updateAttachment(id, attachment);
    }
    deleteAttachment(id: number): Promise<ApiResult<Attachment>> {
        return this.datasource.deleteAttachment(id);
    }
}
