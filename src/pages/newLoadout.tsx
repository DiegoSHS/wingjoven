import { title } from "@/components/primitives";
import { Button, useDisclosure } from "@heroui/react";
import { useEffect, useState } from "react";
import { useAttachmentCategory } from "@/features/attachmentCategory/application/providers/attachmentCategoryProvider";
import { CreateLoadoutForm } from "@/features/loadout/application/components/temporalLoadoutForm";
import { TempLoadout } from "@/features/loadout/domain/entities/loadout";
import { CreateLoadoutModal } from "@/features/loadout/application/components/createLoadoutModal";

export function CreateMetaPage() {
  const { getAttachmentCategories } = useAttachmentCategory()
  const [isLoading, setIsLoading] = useState(false);
  const loadoutModal = useDisclosure()
  const [loadout, setLoadout] = useState<TempLoadout>({
    weapon: {
      name: "",
      weaponCategoryId: undefined,
      gameId: undefined,
    },
    attachments: [],
    weaponCategory: {
      name: "",
    }
  })

  useEffect(() => {
    getAttachmentCategories()
    return () => {

    };
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Subir arma nueva</h1>
      </div>
      <CreateLoadoutForm
        loadout={loadout}
        setLoadout={setLoadout}
        setIsLoading={setIsLoading}
      />
      <CreateLoadoutModal
        isOpen={loadoutModal.isOpen}
        onOpenChange={loadoutModal.onOpenChange}
      />
      <Button
        isLoading={isLoading}
        className="self-center"
        color="primary"
        variant="solid"
        onPress={loadoutModal.onOpen}
      >
        Subir
      </Button>

    </section>
  );
}
