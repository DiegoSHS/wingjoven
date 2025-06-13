import { title } from "@/components/primitives"
import { WeaponScreen } from "@/features/weapon/application/screens/weaponScreen"

export const WeaponPage = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
                <h1 className={title()}>Meta</h1>
            </div>
            <div>
                <WeaponScreen />
            </div>
        </section>
    )
}