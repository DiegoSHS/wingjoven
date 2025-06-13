import { createContext } from "react";

const WeaponContext = createContext({})

export function WeaponProvider({ children }: { children: React.ReactNode }) {
    return (
        <WeaponContext.Provider value={{}}>
            {children}
        </WeaponContext.Provider>
    )
}