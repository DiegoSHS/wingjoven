import { ApiResult } from "@/features/apiClient";
import { Loadout, TempLoadout } from "../../domain/entities/loadout";
import { LoadoutRepository } from "../../domain/repository/loadoutRepository";

export class LoadoutRepositoryImp extends LoadoutRepository {
    constructor(private readonly datasource: LoadoutRepository) {
        super();
    }
    getLoadoutById(id: number): Promise<ApiResult<Loadout>> {
        return this.datasource.getLoadoutById(id);
    }
    getAllLoadouts(): Promise<ApiResult<Loadout[]>> {
        return this.datasource.getAllLoadouts();
    }
    createLoadout(loadout: Loadout): Promise<ApiResult<Loadout>> {
        return this.datasource.createLoadout(loadout);
    }
    updateLoadout(id: number, loadout: Loadout): Promise<ApiResult<Loadout>> {
        return this.datasource.updateLoadout(id, loadout);
    }
    deleteLoadout(id: number): Promise<ApiResult<Loadout>> {
        return this.datasource.deleteLoadout(id);
    }
    getTemporalLoadout(formData: FormData): Promise<ApiResult<TempLoadout>> {
        return this.datasource.getTemporalLoadout(formData);
    }
}
