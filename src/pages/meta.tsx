import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Cloudinary } from "@cloudinary/url-gen";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";

export function MetaCard({ url }: { url: string }) {
  return (
    <Card isPressable shadow="sm">
      <CardHeader className="pt-1 px-3 absolute z-10 top-0 flex-col !items-start">
        <h4 className="font-medium text-large">Nombre del arma</h4>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <Image
          isBlurred
          src={url}
          alt={`Uploaded image from ${url}`}
          className="w-full object-cover aspect-video h-[140px] z-0"
          radius="lg"
          shadow="sm"
          width="100%"
        />
      </CardBody>
      <CardFooter className="flex gap-1">
        <Chip variant="dot" size="sm" color="secondary">
          Larga distancia
        </Chip>
        <Chip variant="faded" size="sm" color="secondary">
          Larga distancia
        </Chip>
      </CardFooter>
    </Card>
  )
}

export function MetaCards({ data }: { data: ImageRes[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {data.length !== 0 && data.map((item) => (
        <MetaCard key={item.id} url={item.url} />
      ))}
    </div>
  );
}

interface ApiResponse<T> {
  data: T
  message: string
  error: string
}

interface ImageRes {
  url: string
  id: string
}

const cld = new Cloudinary({
  cloud: {
    apiKey: import.meta.env.VITE_CLOUDINARY_API_KEY,
    apiSecret: import.meta.env.VITE_CLOUDINARY_API_SECRET,
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
  }
})

export function MetaPage() {
  const [weaponData, setWeaponData] = useState<ImageRes[]>([]);
  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get<ApiResponse<ImageRes[]>>('http://localhost:3000/cloudinary')
      console.log("Fetched images:", data);
      const newData = data.data.map((item) => {
        const url = cld.image(item.id)
          .format('auto')
          .quality('auto')
          .effect(backgroundRemoval())
          .toURL()
        return {
          ...item,
          url
        };
      });
      setWeaponData(newData);
    }
    fetch()
    return () => {

    };
  }, []);
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Meta</h1>
      </div>
      <div>
        <MetaCards data={weaponData} />
      </div>
    </section>
  );
}
