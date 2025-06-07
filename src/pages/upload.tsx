import { title } from "@/components/primitives";
import { removeImageBackground } from "@/features/backgroundrm";
import DefaultLayout from "@/layouts/default";
import { button } from "@heroui/theme";

export default function DocsPage() {
  const classNames = button({
    variant: 'shadow',
    color: "primary",
    size: "md",
    radius: "md",
    fullWidth: false,
  })
  const onPress = async () => {
    console.log("Button pressed!");
    const dataurl = await removeImageBackground('/test.jpg')
    console.log(dataurl);
  }
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title()}>Docs</h1>
        </div>
        <button
          onClick={onPress}
          className={classNames}
        >
          test
        </button>
      </section>
    </DefaultLayout>
  );
}
