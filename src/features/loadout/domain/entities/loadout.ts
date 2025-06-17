import { Attachment } from "@/features/attachment/domain/entities/attachment";
import { Weapon } from "@/features/weapon/domain/entities/weapon";
import { WeaponCategory } from "@/features/weaponCategory/domain/entities/weaponCategory";

export interface Loadout {
    id: number;
    name: string;
}

export interface TempLoadout {
    attachments: {
        attachmentCategory: '',
        attachments: Attachment
    }[]
    weapon: Weapon
    weaponCategory: WeaponCategory
}
