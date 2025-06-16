import { ApiResult } from "@/features/apiClient";
import { AttachmentCategory } from "../entities/attachmentCategory";

export abstract class AttachmentCategoryRepository {
    abstract getAttachmentCategoryById(id: number): Promise<ApiResult<AttachmentCategory>>;
    abstract getAllAttachmentCategories(): Promise<ApiResult<AttachmentCategory[]>>;
    abstract createAttachmentCategory(attachmentCategory: AttachmentCategory): Promise<ApiResult<AttachmentCategory>>;
    abstract updateAttachmentCategory(id: number, attachmentCategory: AttachmentCategory): Promise<ApiResult<AttachmentCategory>>;
    abstract deleteAttachmentCategory(id: number): Promise<ApiResult<AttachmentCategory>>;
}
