import { title } from "@/components/primitives";
import { Card, CardBody, CardFooter, CardHeader, Chip, Image } from "@heroui/react";
import axios from "axios";
import { useEffect, useState } from "react";

export function MetaCard({ url }: { url: string }) {
  return (
    <Card isPressable shadow="sm">
      <CardHeader className="pt-1 px-3 absolute z-10 top-0 flex-col !items-start bg-gradient-to-b from-black from-2%">
        <h4 className="text-white font-medium text-large">Nombre del arma</h4>
      </CardHeader>
      <CardBody className="overflow-visible p-0">
        <Image
          src={url}
          alt={`Uploaded image from ${url}`}
          className="w-full object-cover h-[140px] z-0"
          radius="lg"
          shadow="sm"
          width="100%"
        />
      </CardBody>
      <CardFooter className="flex gap-1">
        <Chip variant="faded" size="sm" color="secondary">
          Larga distancia
        </Chip>
        <Chip variant="faded" size="sm" color="secondary">
          Larga distancia
        </Chip>
      </CardFooter>
    </Card>
  )
}

export function MetaCards({ urls }: { urls: string[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {urls.length !== 0 && urls.map((url, index) => (
        <MetaCard key={index} url={url} />
      ))}
    </div>
  );
}

export function MetaPage() {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const { data } = await axios.get('http://localhost:3000/images')
      console.log("Fetched images:", data);
      setUrls(data.urls);
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
        <MetaCards urls={urls} />
      </div>
    </section>
  );
}
