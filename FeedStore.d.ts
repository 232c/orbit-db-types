declare module "orbit-db-feedstore" {
    import Store from "orbit-db-store";

    export default class FeedStore<T> extends Store {
        add(data: any): Promise<string>;
        get(hash: string): OrbitDBTypedEntryLog<T>

        remove(hash: string): Promise<string>;

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
