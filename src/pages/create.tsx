import { title } from "@/components/primitives";
import { Button, Form, Image, Input, Select, SelectItem } from "@heroui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

const weaponTypes: {
  label: string;
  value: string;
}[] = [

  ]

export function CreateMetaPage() {
  const [file, setFile] = useState<File>();
  const [isLoading, setIsLoading] = useState(false);
  const handleUpload = async () => {
    console.log("Uploading file");
    const formData = new FormData();
    if (!file) {
      console.error("No file selected");
      return;
    }
    formData.append("file", file);
    setIsLoading(true)
    const { data } = await axios.post('http://localhost:3000/cloudinary', formData)
    setIsLoading(false)
    console.log("Response from server:", data);
  }
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    e.stopPropagation()
    const detectedFiles = e.target.files
    if (detectedFiles && detectedFiles.length > 0) {
      setFile(detectedFiles[0])
    }
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Subir arma nueva</h1>
      </div>
      <div className="flex flex-col sm:flex-row gap-2">
        <Form className={file ? "w-full sm:w-1/2" : "w-full"}>
          <Input isDisabled={isLoading} placeholder="Nombre del arma" name="name" />
          <Input isDisabled={isLoading} placeholder="mirilla" name="optic" />
          <Select
            isRequired
            isDisabled={isLoading}
            label="Cañon"
            placeholder="Elije un cañon"
            name="barrel"
            items={[] as { label: string; value: string }[]}
          >
            {
              (barrel) => <SelectItem key={barrel.value}>{barrel.label}</SelectItem>
            }
          </Select>
          <Select
            isRequired
            isDisabled={isLoading}
            label="Tipo de arma"
            placeholder="Elije un tipo de arma"
            name="weaponType"
            items={weaponTypes}
          >
            {
              (weaponType) => <SelectItem key={weaponType.value}>{weaponType.label}</SelectItem>
            }
          </Select>
          <Input isDisabled={isLoading} placeholder="Nombre del arma" name="muzzle" />
          <Input type="file" onChange={handleChange} />
          <Button isLoading={isLoading} className="self-center" color="primary" onPress={handleUpload} variant="solid">
            Subir
          </Button>
        </Form>
        {
          (file != undefined) && (
            <Image isBlurred isLoading={isLoading} classNames={{
              wrapper: "w-full sm:w-1/2",
            }} src={file ? URL.createObjectURL(file) : ""} alt="Vista previa" className="object-cover aspect-video" />
          )
        }
      </div>

    </section>
  );
}
