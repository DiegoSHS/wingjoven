import { createContext, useContext } from "react";
import { Game } from "../../domain/entities/game";
import { GameRepositoryImp } from "../../infrastructure/repository/gameRepository";
import { GameDatasourceImp } from "../../infrastructure/datasources/gameDatasource";
import { Action, BaseState, useBaseReducer } from "@/utils";

interface GameContextType {
    state: BaseState<Game>;
    dispatch: React.Dispatch<Action<Game>>;
    getGames: () => Promise<void>;
}

const GameContext = createContext<GameContextType | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
    const { state, dispatch } = useBaseReducer<Game>();
    const repository = new GameRepositoryImp(
        new GameDatasourceImp()
    );
    const getGames = async () => {
        const { data } = await repository.getAllGames();
        dispatch({ type: 'SET', payload: data });
    };
    return (
        <GameContext.Provider value={{ state, dispatch, getGames }}>
            {children}
        </GameContext.Provider>
    );
}

export const useGame = () => {
    const context = useContext(GameContext);
    if (!context) throw new Error("useGame must be used within a GameProvider");
    return context;
};
