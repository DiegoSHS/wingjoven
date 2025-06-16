import { ApiResult } from "@/features/apiClient";
import { AttachmentCategory } from "../../domain/entities/attachmentCategory";
import { AttachmentCategoryRepository } from "../../domain/repository/attachmentCategoryRepository";

export class AttachmentCategoryRepositoryImp extends AttachmentCategoryRepository {
    constructor(private readonly datasource: AttachmentCategoryRepository) {
        super();
    }
    getAttachmentCategoryById(id: number): Promise<ApiResult<AttachmentCategory>> {
        return this.datasource.getAttachmentCategoryById(id);
    }
    getAllAttachmentCategories(): Promise<ApiResult<AttachmentCategory[]>> {
        return this.datasource.getAllAttachmentCategories();
    }
    createAttachmentCategory(attachmentCategory: AttachmentCategory): Promise<ApiResult<AttachmentCategory>> {
        return this.datasource.createAttachmentCategory(attachmentCategory);
    }
    updateAttachmentCategory(id: number, attachmentCategory: AttachmentCategory): Promise<ApiResult<AttachmentCategory>> {
        return this.datasource.updateAttachmentCategory(id, attachmentCategory);
    }
    deleteAttachmentCategory(id: number): Promise<ApiResult<AttachmentCategory>> {
        return this.datasource.deleteAttachmentCategory(id);
    }
}
