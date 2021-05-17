type callback<T> = (entry: [
    keyof T,
    any
], index?: number, object?: T) => [
    string | number | symbol,
    any
];
/**
 * Converts a reference type to an object
 * @param {object} item value to perform function on
 * @returns an objectified value
 */
declare function objectify<T extends object>(item: T, callbackFn?: callback<T>, thisArg?: any): {};
export { objectify as default };
