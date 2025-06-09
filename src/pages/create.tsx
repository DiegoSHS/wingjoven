import { title } from "@/components/primitives";
import { Button, Form, Input, Select, SelectItem } from "@heroui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

const weaponTypes = [
  {
    label: "Pistola",
    value: "pistol"
  }, {
    label: "Rifle",
    value: "rifle"
  }, {
    label: "Escopeta",
    value: "shotgun"
  }, {
    label: "Subfusil",
    value: "submachine-gun"
  }, {
    label: "Sniper",
    value: "sniper-rifle"
  }, {
    label: "Ametralladora",
    value: "light-machine-gun"
  }
]

export function CreateMetaPage() {
  const [file, setFile] = useState<File>();
  const handleUpload = async () => {
    console.log("Image uploaded");
    const formData = new FormData();
    if (!file) {
      console.error("No file selected");
      return;
    }
    formData.append("image", file);
    const { data } = await axios.post('http://localhost:3000/upload', formData)
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
        <h1 className={title()}>Docs</h1>
      </div>
      <Form>
        <Input placeholder="Nombre del arma" name="name" />
        <Input placeholder="mirilla" name="optic" />
        <Select
          isRequired
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
          label="Tipo de arma"
          placeholder="Elije un tipo de arma"
          name="weaponType"
          items={weaponTypes}
        >
          {
            (weaponType) => <SelectItem key={weaponType.value}>{weaponType.label}</SelectItem>
          }
        </Select>
        <Input placeholder="Nombre del arma" name="muzzle" />
      </Form>
      <Button onPress={handleUpload} variant="shadow">
        ButtonTest
      </Button>
      <Input type="file" onChange={handleChange} />

    </section>
  );
}
