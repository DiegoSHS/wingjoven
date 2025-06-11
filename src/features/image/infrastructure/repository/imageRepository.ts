import { ApiResult } from "@/features/apiClient";
import { DeleteApiResponse, ResourceApiResponse, UploadApiResponse } from "cloudinary";
import { ImageRepository } from "../../domain/repository/imageRepository";

export class ImageRepositoryImp extends ImageRepository {
    constructor(
        private readonly imageDatasource: ImageRepository
    ) {
        super();
    }
    getAllImages(): Promise<ApiResult<ResourceApiResponse>> {
        return this.imageDatasource.getAllImages()
    }
    getImageById(public_id: string): Promise<ApiResult<ResourceApiResponse>> {
        return this.imageDatasource.getImageById(public_id)
    }
    uploadImage(file: File): Promise<ApiResult<UploadApiResponse>> {
        return this.imageDatasource.uploadImage(file);
    }
    updateImage(id: string, file: File): Promise<ApiResult<UploadApiResponse>> {
        return this.imageDatasource.updateImage(id, file)
    }
    deleteImage(id: string): Promise<ApiResult<DeleteApiResponse>> {
        return this.imageDatasource.deleteImage(id)
    }
}