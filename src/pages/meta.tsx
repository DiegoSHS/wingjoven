import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import { backgroundRemoval } from "@cloudinary/url-gen/actions/effect";
import { ApiResult } from "@/features/apiClient";
import { useCloudinary } from "@/features/image/application/providers/imageProvider";
import { ResourceApiResponse } from "cloudinary";

interface Resource {
  secure_url: string;
  public_id: string;
}

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

export function MetaCards({ data }: { data: Resource[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {data.length !== 0 && data.map((item) => (
        <MetaCard key={item.public_id} url={item.secure_url} />
      ))}
    </div>
  );
}

export function MetaPage() {
  const [weaponData, setWeaponData] = useState<Resource[]>([]);
  const cld = useCloudinary()
  useEffect(() => {
    const fetch = async () => {
      const { data: { data } } = await axios.get<ApiResult<ResourceApiResponse>>('http://localhost:3000/cloudinary')
      console.log("Fetched images:", data);
      const newData = data.resources.map((item) => {
        const url = cld.image(item.secure_url)
          .format('auto')
          .quality('auto')
          .effect(backgroundRemoval())
          .toURL()
        return {
          ...item,
          secure_url: url,
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
