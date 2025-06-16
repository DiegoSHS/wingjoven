import { createContext, useContext } from "react";
import { LoadoutAttachment } from "../../domain/entities/loadoutAttachment";
import { LoadoutAttachmentRepositoryImp } from "../../infrastructure/repository/loadoutAttachmentRepository";
import { LoadoutAttachmentDatasourceImp } from "../../infrastructure/datasources/loadoutAttachmentDatasource";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface LoadoutAttachmentContextType {
    state: BaseState<LoadoutAttachment>;
    dispatch: React.Dispatch<Action<LoadoutAttachment>>;
    getLoadoutAttachments: () => Promise<void>;
}

const LoadoutAttachmentContext = createContext<LoadoutAttachmentContextType | undefined>(undefined);

export function LoadoutAttachmentProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<LoadoutAttachment>();
    const repository = new LoadoutAttachmentRepositoryImp(
        new LoadoutAttachmentDatasourceImp()
    );
    const getLoadoutAttachments = async () => {
        const { data } = await repository.getAllLoadoutAttachments();
        dispatch({ type: 'SET', payload: data });
    };
    return (
        <LoadoutAttachmentContext.Provider value={{ state, dispatch, getLoadoutAttachments }}>
            {children}
        </LoadoutAttachmentContext.Provider>
    );
}

export const useLoadoutAttachment = () => {
    const context = useContext(LoadoutAttachmentContext);
    if (!context) throw new Error("useLoadoutAttachment must be used within a LoadoutAttachmentProvider");
    return context;
};
