import { ApiResult } from "@/features/apiClient";
import { DeleteApiResponse, ResourceApiResponse, UploadApiResponse } from "cloudinary";

export abstract class ImageDatasource {
    abstract getImageById(id: string): Promise<ApiResult<ResourceApiResponse>>;

    abstract getAllImages(): Promise<ApiResult<ResourceApiResponse>>;

    abstract uploadImage(file: File): Promise<ApiResult<UploadApiResponse>>;

    abstract deleteImage(id: string): Promise<ApiResult<DeleteApiResponse>>;

    abstract updateImage(id: string, file: File): Promise<ApiResult<UploadApiResponse>>;
}