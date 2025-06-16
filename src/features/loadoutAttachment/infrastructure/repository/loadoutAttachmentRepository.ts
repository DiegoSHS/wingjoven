import { ApiResult } from "@/features/apiClient";
import { LoadoutAttachment } from "../../domain/entities/loadoutAttachment";
import { LoadoutAttachmentRepository } from "../../domain/repository/loadoutAttachmentRepository";

export class LoadoutAttachmentRepositoryImp extends LoadoutAttachmentRepository {
    constructor(private readonly datasource: LoadoutAttachmentRepository) {
        super();
    }
    getLoadoutAttachmentById(id: number): Promise<ApiResult<LoadoutAttachment>> {
        return this.datasource.getLoadoutAttachmentById(id);
    }
    getAllLoadoutAttachments(): Promise<ApiResult<LoadoutAttachment[]>> {
        return this.datasource.getAllLoadoutAttachments();
    }
    createLoadoutAttachment(loadoutAttachment: LoadoutAttachment): Promise<ApiResult<LoadoutAttachment>> {
        return this.datasource.createLoadoutAttachment(loadoutAttachment);
    }
    updateLoadoutAttachment(id: number, loadoutAttachment: LoadoutAttachment): Promise<ApiResult<LoadoutAttachment>> {
        return this.datasource.updateLoadoutAttachment(id, loadoutAttachment);
    }
    deleteLoadoutAttachment(id: number): Promise<ApiResult<LoadoutAttachment>> {
        return this.datasource.deleteLoadoutAttachment(id);
    }
}
