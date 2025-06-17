import { createContext, useContext } from "react";
import { Loadout, TempLoadout } from "../../domain/entities/loadout";
import { LoadoutRepositoryImp } from "../../infrastructure/repository/loadoutRepository";
import { LoadoutDatasourceImp } from "../../infrastructure/datasources/loadoutDatasource";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface LoadoutContextType {
    state: BaseState<Loadout>;
    dispatch: React.Dispatch<Action<Loadout>>;
    getLoadouts: () => Promise<void>;
    getTemporalLoadout: (formData: FormData) => Promise<TempLoadout>;
}

const LoadoutContext = createContext<LoadoutContextType | undefined>(undefined);

export function LoadoutProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Loadout>();
    const repository = new LoadoutRepositoryImp(
        new LoadoutDatasourceImp()
    );
    const getLoadouts = async () => {
        const { data } = await repository.getAllLoadouts();
        dispatch({ type: 'SET', payload: data });
    };
    const getTemporalLoadout = async (formData: FormData) => {
        const { data } = await repository.getTemporalLoadout(formData);
        return data;
    }
    return (
        <LoadoutContext.Provider value={{ state, dispatch, getLoadouts, getTemporalLoadout }}>
            {children}
        </LoadoutContext.Provider>
    );
}

export const useLoadout = () => {
    const context = useContext(LoadoutContext);
    if (!context) throw new Error("useLoadout must be used within a LoadoutProvider");
    return context;
};
