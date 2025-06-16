import { createContext, useContext } from "react";
import { WeaponAttachment } from "../../domain/entities/weaponAttachment";
import { WeaponAttachmentRepositoryImp } from "../../infrastructure/repository/weaponAttachmentRepository";
import { WeaponAttachmentDatasourceImp } from "../../infrastructure/datasources/weaponAttachmentDatasource";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface WeaponAttachmentContextType {
    state: BaseState<WeaponAttachment>;
    dispatch: React.Dispatch<Action<WeaponAttachment>>;
    getWeaponAttachments: () => Promise<void>;
}

const WeaponAttachmentContext = createContext<WeaponAttachmentContextType | undefined>(undefined);

export function WeaponAttachmentProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<WeaponAttachment>();
    const repository = new WeaponAttachmentRepositoryImp(
        new WeaponAttachmentDatasourceImp()
    );
    const getWeaponAttachments = async () => {
        const { data } = await repository.getAllWeaponAttachments();
        dispatch({ type: 'SET', payload: data });
    };
    return (
        <WeaponAttachmentContext.Provider value={{ state, dispatch, getWeaponAttachments }}>
            {children}
        </WeaponAttachmentContext.Provider>
    );
}

export const useWeaponAttachment = () => {
    const context = useContext(WeaponAttachmentContext);
    if (!context) throw new Error("useWeaponAttachment must be used within a WeaponAttachmentProvider");
    return context;
};
