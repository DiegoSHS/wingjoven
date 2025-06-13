import type { NavigateOptions } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import { useHref, useNavigate } from "react-router-dom";
import { CloudinaryProvider } from "./features/image/application/providers/imageProvider";
import { WeaponProvider } from "./features/weapon/application/providers/weaponProvider";

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
          {children}
        </WeaponProvider>
      </CloudinaryProvider>
    </HeroUIProvider>
  );
}