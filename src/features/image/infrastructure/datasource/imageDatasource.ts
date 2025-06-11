import { ApiClient, ApiResult } from "@/features/apiClient";
import { DeleteApiResponse, ResourceApiResponse, UploadApiResponse } from "cloudinary";
import { ImageDatasource } from "../../domain/datasources/imageDatasource";

export class ImageDatasourceImp extends ImageDatasource {
    async getAllImages(): Promise<ApiResult<ResourceApiResponse>> {
        const { data } = await ApiClient.get<ApiResult<ResourceApiResponse>>("/cloudinary");
        return data;
    }
    async getImageById(id: string): Promise<ApiResult<ResourceApiResponse>> {
        const { data } = await ApiClient.get<ApiResult<ResourceApiResponse>>(`/cloudinary/${id}`);
        return data;
    }
    async uploadImage(file: File): Promise<ApiResult<UploadApiResponse>> {
        const { data } = await ApiClient.post<ApiResult<UploadApiResponse>>("/cloudinary", file)
        return data;
    }
    async updateImage(id: string, file: File): Promise<ApiResult<UploadApiResponse>> {
        const { data } = await ApiClient.put<ApiResult<UploadApiResponse>>(`/cloudinary/${id}`, file)
        return data;
    }
    async deleteImage(id: string): Promise<ApiResult<DeleteApiResponse>> {
        const { data } = await ApiClient.delete<ApiResult<DeleteApiResponse>>(`/cloudinary/${id}`);
        return data;
    }
}