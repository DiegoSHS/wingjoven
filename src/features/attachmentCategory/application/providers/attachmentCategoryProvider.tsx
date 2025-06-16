import { createContext, useContext } from "react";
import { AttachmentCategory } from "../../domain/entities/attachmentCategory";
import { AttachmentCategoryRepositoryImp } from "../../infrastructure/repository/attachmentCategoryRepository";
import { AttachmentCategoryDatasourceImp } from "../../infrastructure/datasources/attachmentCategoryDatasource";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface AttachmentCategoryContextType {
    state: BaseState<AttachmentCategory>;
    dispatch: React.Dispatch<Action<AttachmentCategory>>;
    getAttachmentCategories: () => Promise<void>;
}

const AttachmentCategoryContext = createContext<AttachmentCategoryContextType | undefined>(undefined);

export function AttachmentCategoryProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<AttachmentCategory>();
    const repository = new AttachmentCategoryRepositoryImp(
        new AttachmentCategoryDatasourceImp()
    );
    const getAttachmentCategories = async () => {
        const { data } = await repository.getAllAttachmentCategories();
        dispatch({ type: 'SET', payload: data });
    };
    return (
        <AttachmentCategoryContext.Provider value={{ state, dispatch, getAttachmentCategories }}>
            {children}
        </AttachmentCategoryContext.Provider>
    );
}

export const useAttachmentCategory = () => {
    const context = useContext(AttachmentCategoryContext);
    if (!context) throw new Error("useAttachmentCategory must be used within an AttachmentCategoryProvider");
    return context;
};
