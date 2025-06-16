import { Attachment } from "@/features/attachment/domain/entities/attachment";

export interface AttachmentCategory {
    id?: number;
    name: string;
    attachment?: Attachment[]
}