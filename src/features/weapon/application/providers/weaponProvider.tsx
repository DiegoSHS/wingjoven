import { Action, BaseState, useBaseReducer } from "@/utils";
import { createContext, useContext } from "react";
import { Weapon } from "../../domain/entities/weapon";
import { WeaponRepositoryImp } from "../../infrastructure/repository/weaponRepository";
import { WeaponDatasourceImp } from "../../infrastructure/datasources/weaponDatasource";

interface WeaponContextType {
    state: BaseState<Weapon>;
    dispatch: React.Dispatch<Action<Weapon>>;
    getWeapons: () => Promise<void>;
}

const WeaponContext = createContext<WeaponContextType | undefined>(undefined)

export function WeaponProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Weapon>();
    const repository = new WeaponRepositoryImp(
        new WeaponDatasourceImp()
    )
    const getWeapons = async () => {
        const { data } = await repository.getAllWeapons()
        console.log("Fetched weapons:", data);
        dispatch({ type: 'SET', payload: data });
    }
    return (
        <WeaponContext.Provider value={{ state, dispatch, getWeapons }}>
            {children}
        </WeaponContext.Provider>
    )
}

export const useWeapon = () => {
    const context = useContext(WeaponContext);
    if (!context) throw new Error("useWeapon must be used within a WeaponProvider");
    return context;
};