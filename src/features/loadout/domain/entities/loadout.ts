import { Attachment } from "@/features/attachment/domain/entities/attachment";
import { AttachmentCategory } from "@/features/attachmentCategory/domain/entities/attachmentCategory";
import { Weapon } from "@/features/weapon/domain/entities/weapon";
import { WeaponCategory } from "@/features/weaponCategory/domain/entities/weaponCategory";

export interface Loadout {
    id: number;
    name: string;
}

export interface TempLoadout {
    attachments: {
        category: AttachmentCategory,
        attachment: Attachment
    }[]
    weapon: Weapon
    weaponCategory: WeaponCategory
}
