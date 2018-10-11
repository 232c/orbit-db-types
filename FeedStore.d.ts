declare module "orbit-db-feedstore" {
    import { Store } from "orbit-db-store";

    export class FeedStore extends Store {
        add(data: any): Promise<string>;
        get(hash: string): any;

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
            next(): any,
            collect(): any[]
        };
    }
}