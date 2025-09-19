import { AsyncAutocomplete } from "@/components/asyncAutocomplete"
import { Divider, Form, Image, Input } from "@heroui/react"
import { ChangeEvent, useState } from "react";
import { useLoadout } from "../providers/loadoutProvider";
import { TempLoadout } from "../../domain/entities/loadout";

export const CreateLoadoutForm = ({
    loadout,
    setLoadout,
    setIsLoading
}: {
    loadout: TempLoadout,
    setLoadout: React.Dispatch<React.SetStateAction<TempLoadout>>,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    const [file, setFile] = useState<File>();
    const { getTemporalLoadout, createLoadout } = useLoadout()
    const handleSaveLoadout = () => {

    }
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
    return (
        <div className="flex flex-col sm:flex-row gap-2">
            <Form className={file ? "w-full sm:w-1/2" : "w-full"}>
                <Input
                    isRequired
                    type="file"
                    onChange={handleChange}
                />
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
                                    key={item.category.id}
                                    name={item.category.name}
                                    defaultSelectedItem={item.attachment}
                                    route="/attachment/search"
                                />
                            )
                        })
                    )
                }
            </Form>
            {
                (file != undefined) && (
                    <Image
                        isBlurred
                        classNames={{
                            wrapper: "w-full sm:w-1/2",
                        }}
                        src={file ? URL.createObjectURL(file) : ""}
                        alt="Vista previa" className="object-cover aspect-video"
                    />
                )
            }
        </div>
    )
}