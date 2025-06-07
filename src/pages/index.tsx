import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { TwitterIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Las&nbsp;</span>
          <span className={title({ color: "violet" })}>mejores&nbsp;</span>
          <br />
          <span className={title()}>
            clases
          </span>
          <span className={title({ color: "yellow" })}> META&nbsp;</span>
          <span className={title()}>
            de warzone en un solo lugar.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Traidas a ti por winghaven.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={"/"}
          >
            Comenzar
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.twitter}
          >
            <TwitterIcon size={20} />
            Winghaven
          </Link>
        </div>
      </section>
    </DefaultLayout>
  );
}
