
interface OrbitDBIdentityJson {
    id: string,
    publicKey: string,
    signatures: { id: string, publicKey: string },
    type: string
}

interface OrbitDBLamportClockJson {
    id: 'string',
    time: number
}

interface OrbitDBEntryLog<PAYLOAD> {
    hash: string,
    id: string,
    payload: PAYLOAD,
    next: string[], // Hashes of parents
    v: number, // Format, can be 0 or 1
    clock: OrbitDBLamportClockJson,
    key: string,
    identity: OrbitDBIdentityJson,
    sig: string
}

interface OrbitDBTypedEntryLog<T> extends OrbitDBEntryLog<{ op?: string, key?: string, value: T }> {

}
