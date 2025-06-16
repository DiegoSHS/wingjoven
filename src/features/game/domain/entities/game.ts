export interface Game<T = any> {
    id?: number;
    name: string;
    weapon?: T;
}