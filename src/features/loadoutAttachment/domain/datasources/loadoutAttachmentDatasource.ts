import { ApiResult } from "@/features/apiClient";
import { LoadoutAttachment } from "../entities/loadoutAttachment";

export abstract class LoadoutAttachmentDatasource {
    abstract getLoadoutAttachmentById(id: number): Promise<ApiResult<LoadoutAttachment>>;
    abstract getAllLoadoutAttachments(): Promise<ApiResult<LoadoutAttachment[]>>;
    abstract createLoadoutAttachment(loadoutAttachment: LoadoutAttachment): Promise<ApiResult<LoadoutAttachment>>;
    abstract updateLoadoutAttachment(id: number, loadoutAttachment: LoadoutAttachment): Promise<ApiResult<LoadoutAttachment>>;
    abstract deleteLoadoutAttachment(id: number): Promise<ApiResult<LoadoutAttachment>>;
}
