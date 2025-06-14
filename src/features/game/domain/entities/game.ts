export interface Game<T> {
    id?: number;
    name: string;
    weapon?: T;
}