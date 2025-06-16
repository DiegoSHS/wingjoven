import { Action, BaseState, useBaseReducer } from "@/utils";
import { WeaponCategory } from "../../domain/entities/weaponCategory";
import { WeaponCategoryRepositoryImp } from "../../infrastructure/respository/weaponCategoryRepository";
import { WeaponCategoryDatasourceImp } from "../../infrastructure/datasources/weaponCategoryDatasource";
import { createContext, useContext } from "react";

interface WeaponCategoryContextType {
    state: BaseState<WeaponCategory>;
    dispatch: React.Dispatch<Action<WeaponCategory>>;
    getWeaponCategories: () => Promise<void>;
}

const WeaponCategoryContext = createContext<WeaponCategoryContextType | undefined>(undefined);

export function WeaponCategoryProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<WeaponCategory>();
    const repository = new WeaponCategoryRepositoryImp(
        new WeaponCategoryDatasourceImp()
    );

    const getWeaponCategories = async () => {
        const { data } = await repository.getAllWeaponCategories();
        dispatch({ type: 'SET', payload: data });
    };

    return (
        <WeaponCategoryContext.Provider value={{ state, dispatch, getWeaponCategories }}>
            {children}
        </WeaponCategoryContext.Provider>
    );
}

export const useWeaponCategory = () => {
    const context = useContext(WeaponCategoryContext);
    if (!context) throw new Error("useWeaponCategory must be used within a WeaponCategoryProvider");
    return context;
};