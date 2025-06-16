import type { NavigateOptions } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { useHref, useNavigate } from "react-router-dom";
import { CloudinaryProvider } from "./features/image/application/providers/imageProvider";
import { WeaponProvider } from "./features/weapon/application/providers/weaponProvider";
import { WeaponCategoryProvider } from "./features/weaponCategory/application/providers/weaponCategoryProvider";
import { AttachmentCategoryProvider } from "./features/attachmentCategory/application/providers/attachmentCategoryProvider";
import { WeaponAttachmentProvider } from "./features/weaponAttachment/application/providers/weaponAttachmentProvider";
import { GameProvider } from "./features/game/application/providers/gameProvider";
import { LoadoutProvider } from "./features/loadout/application/providers/loadoutProvider";
import { LoadoutAttachmentProvider } from "./features/loadoutAttachment/application/providers/loadoutAttachmentProvider";
import { AttachmentProvider } from "./features/attachment/application/providers/attachmentProvider";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
      <CloudinaryProvider>
        <WeaponProvider>
          <WeaponCategoryProvider>
            <AttachmentCategoryProvider>
              <WeaponAttachmentProvider>
                <GameProvider>
                  <LoadoutProvider>
                    <LoadoutAttachmentProvider>
                      <AttachmentProvider>
                        {children}
                      </AttachmentProvider>
                    </LoadoutAttachmentProvider>
                  </LoadoutProvider>
                </GameProvider>
              </WeaponAttachmentProvider>
            </AttachmentCategoryProvider>
          </WeaponCategoryProvider>
        </WeaponProvider>
      </CloudinaryProvider>
    </HeroUIProvider>
  );
}