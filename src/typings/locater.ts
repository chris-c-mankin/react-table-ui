export type LocaterFunc<T extends object> = (row: T, ...args: any) => unknown;

export type Locater<T extends object> = [locater: LocaterFunc<T>, ...args: any];