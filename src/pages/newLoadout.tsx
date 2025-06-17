import { title } from "@/components/primitives";
import { Button, Divider, Form, Image, Input } from "@heroui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useAttachmentCategory } from "@/features/attachmentCategory/application/providers/attachmentCategoryProvider";
import { useAttachment } from "@/features/attachment/application/providers/attachmentProvider";
import { AsyncAutocomplete } from "@/components/asyncAutocomplete";
import { TempLoadout } from "@/features/loadout/domain/entities/loadout";
import { useLoadout } from "@/features/loadout/application/providers/loadoutProvider";

export function CreateMetaPage() {
  const { getAttachmentCategories } = useAttachmentCategory()
  const { getTemporalLoadout } = useLoadout()
  const { getAttachments } = useAttachment()
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
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
  const handleUpload = async (file: File) => {
    console.log("Uploading file");
    const formData = new FormData();
    if (!file) {
      console.error("No file selected");
      return;
    }
    formData.append("file", file);
    setIsLoading(true)
    const { attachments, weapon, weaponCategory } = await getTemporalLoadout(formData);
    setLoadout((loadout) => {
      return {
        ...loadout,
        attachments: attachments,
        weapon: weapon ?? loadout.weapon,
        weaponCategory: weaponCategory ?? loadout.weaponCategory,
      }
    })
    setIsLoading(false)
    console.log("Response from server:", {
      attachments,
      weapon,
      weaponCategory
    });
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const detectedFiles = e.target.files
    if (detectedFiles && detectedFiles.length > 0) {
      setFile((_) => detectedFiles[0])
      handleUpload(detectedFiles[0])
    }
  }

  useEffect(() => {
    getAttachmentCategories()
    getAttachments()
    return () => {

    };
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Subir arma nueva</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Form className={file ? "w-full sm:w-1/2" : "w-full"}>
          <Input type="file" onChange={handleChange} />
          <AsyncAutocomplete
            name="Weapon"
            defaultSelectedItem={loadout.weapon}
            route="/weapon/search"
          />
          <Divider />
          {
            loadout.attachments.length > 0 && (
              loadout.attachments.map((item) => {
                return (
                  <AsyncAutocomplete
                    key={item.attachmentCategory}
                    name={item.attachmentCategory}
                    defaultSelectedItem={item.attachments}
                    route="/attachment/search"
                  />
                )
              })
            )
          }
        </Form>
        {
          (file != undefined) && (
            <Image isBlurred isLoading={isLoading} classNames={{
              wrapper: "w-full sm:w-1/2",
            }} src={file ? URL.createObjectURL(file) : ""} alt="Vista previa" className="object-cover aspect-video" />
          )
        }
      </div>
      <Button isLoading={isLoading} className="self-center" color="primary" variant="solid">
        Subir
      </Button>

    </section>
  );
}
