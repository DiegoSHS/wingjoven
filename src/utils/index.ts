interface BaseItem {
    id: number;
    name: string;
}

type Action<T> = {
    type: 'SET' | 'CREATE' | 'UPDATE' | 'DESELECT' | 'DELETE' | 'SELECT'
    payload: T | T[];
}

interface BaseState<T> {
    items: T[];
    selectedItem?: T;
}

export function BaseReducer<T extends BaseItem>({ items, selectedItem }: BaseState<T>, { type, payload }: Action<T>): BaseState<T> {
    switch (type) {
        case "SET":
            return {
                items: payload as T[],
                selectedItem
            };
        case "CREATE":
            return {
                items: [...items, payload as T],
                selectedItem
            };
        case "UPDATE":
            return {
                items: items.map(item => item.id === selectedItem?.id ? payload as T : item),
                selectedItem
            };
        case "DESELECT":
            return {
                items,
                selectedItem: undefined
            };
        case "DELETE":
            return {
                items: items.filter(item => item.id !== (payload as T).id),
                selectedItem
            };
        default:
            return {
                items,
                selectedItem
            };
    }
}