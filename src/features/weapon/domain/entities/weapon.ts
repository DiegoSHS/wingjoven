export interface Weapon<T = any, U = any> {
    id: number;
    name: string;
    gameId?: number;
    weaponCategoryId?: number;
    game?: T;
    weaponCategory?: U;
}
