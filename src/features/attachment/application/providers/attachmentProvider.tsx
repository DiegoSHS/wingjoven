import { createContext, useContext } from "react";
import { Attachment } from "../../domain/entities/attachment";
import { AttachmentRepositoryImp } from "../../infrastructure/repository/attachmentRepository";
import { AttachmentDatasourceImp } from "../../infrastructure/datasources/attachmentDatasource";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface AttachmentContextType {
    state: BaseState<Attachment>;
    dispatch: React.Dispatch<Action<Attachment>>;
    getAttachments: () => Promise<void>;
}

const AttachmentContext = createContext<AttachmentContextType | undefined>(undefined);

export function AttachmentProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Attachment>();
    const repository = new AttachmentRepositoryImp(
        new AttachmentDatasourceImp()
    );
    const getAttachments = async () => {
        const { data } = await repository.getAllAttachments();
        dispatch({ type: 'SET', payload: data });
    };
    return (
        <AttachmentContext.Provider value={{ state, dispatch, getAttachments }}>
            {children}
        </AttachmentContext.Provider>
    );
}

export const useAttachment = () => {
    const context = useContext(AttachmentContext);
    if (!context) throw new Error("useAttachment must be used within an AttachmentProvider");
    return context;
};
