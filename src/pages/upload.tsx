import { title } from "@/components/primitives";
import { removeImageBackground } from "@/features/backgroundrm";
import DefaultLayout from "@/layouts/default";
import { Button, Input } from "@heroui/react";
import axios from "axios";
import { ChangeEvent, useState } from "react";

export function UploadPage() {
  const [file, setFile] = useState<File>();
  const handleUpload = async () => {
    console.log("Button clicked");
    const imgres = await removeImageBackground(await file?.arrayBuffer())
    console.log("Image processed:", imgres);
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
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Docs</h1>
        </div>
        <Button onPress={handleUpload} variant="shadow">
          ButtonTest
        </Button>
        <Input type="file" onChange={handleChange} />
      </section>
    </DefaultLayout>
  );
}
