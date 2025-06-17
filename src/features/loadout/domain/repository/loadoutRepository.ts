import { ApiResult } from "@/features/apiClient";
import { Loadout, TempLoadout } from "../entities/loadout";

export abstract class LoadoutRepository {
    abstract getLoadoutById(id: number): Promise<ApiResult<Loadout>>;
    abstract getAllLoadouts(): Promise<ApiResult<Loadout[]>>;
    abstract createLoadout(loadout: Loadout): Promise<ApiResult<Loadout>>;
    abstract updateLoadout(id: number, loadout: Loadout): Promise<ApiResult<Loadout>>;
    abstract deleteLoadout(id: number): Promise<ApiResult<Loadout>>;
    abstract getTemporalLoadout(formData: FormData): Promise<ApiResult<TempLoadout>>;
}
