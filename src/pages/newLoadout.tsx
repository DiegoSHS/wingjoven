import { title } from "@/components/primitives";
import { ApiClient, ApiResult } from "@/features/apiClient";
import { Weapon } from "@/features/weapon/domain/entities/weapon";
import { WeaponCategory } from "@/features/weaponCategory/domain/entities/weaponCategory";
import { Autocomplete, AutocompleteItem, Button, Divider, Form, Image, Input } from "@heroui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { useAsyncList } from "@react-stately/data";
import { Attachment } from "@/features/attachment/domain/entities/attachment";
import { useWeaponCategory } from "@/features/weaponCategory/application/providers/weaponCategoryProvider";
import { useAttachmentCategory } from "@/features/attachmentCategory/application/providers/attachmentCategoryProvider";

interface TempLoadout {
  attachments: {
    attachmentCategory: '',
    attachments: Attachment[]
  }[]
  weapon: Weapon
  weaponCategory: WeaponCategory
}

export function CreateMetaPage() {
  const { getAttachmentCategories, state: { items: attachmentCategories } } = useAttachmentCategory()
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
  let list = useAsyncList({
    async load({ signal, filterText }) {
      let { data: { data } } = await ApiClient.get<ApiResult<Weapon[]>>('/weapon', {
        params: {
          name: filterText,
        },
        signal,
      });
      return {
        items: data,
      };
    },
  });

  const handleUpload = async (file: File) => {
    console.log("Uploading file");
    const formData = new FormData();
    if (!file) {
      console.error("No file selected");
      return;
    }
    formData.append("file", file);
    setIsLoading(true)
    const { data: { data } } = await ApiClient.post<ApiResult<TempLoadout>>('/loadout/temporal', formData)
    if (!data) {
      console.error("No data received from server");
      setIsLoading(false)
      return;
    }
    setLoadout((loadout) => {
      return {
        ...loadout,
        attachments: data.attachments,
        weapon: data.weapon ? data.weapon : loadout.weapon,
        weaponCategory: data.weaponCategory ? data.weaponCategory : loadout.weaponCategory,
      }
    })
    setIsLoading(false)
    console.log("Response from server:", data);
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
          <Autocomplete isDisabled={isLoading} label="Nombre del arma" items={list.items as Weapon[]} selectedKey={loadout.weapon.id + ""}>
            {(item) => (
              <AutocompleteItem key={item.id}>
                {
                  item.name
                }
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Divider />
          {
            attachmentCategories.map((item) => {
              return (
                <Autocomplete key={item.id} label={item.name} defaultItems={item.attachments || []}>
                  {
                    (attachment) => (
                      <AutocompleteItem key={attachment.id}>
                        {
                          attachment.name
                        }
                      </AutocompleteItem>
                    )
                  }
                </Autocomplete>
              )
            })
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
