declare module "orbit-db-eventstore" {
    import Store from "orbit-db-store";

    export default class EventStore<T> extends Store {
        add(data: any): Promise<string>;
        get(hash: string): OrbitDBTypedEntryLog<T>;

        iterator(options?: { 
            gt?: string,
            gte?: string, 
            lt?: string, 
            lte?: string, 
            limit?: number, 
            reverse?: boolean 
        }): {
            [Symbol.iterator](),
            next(): { value: OrbitDBTypedEntryLog<T>, done: boolean },
            collect(): OrbitDBTypedEntryLog<T>[]
        };
    }
}
