type callback<T> = (
  entry: [keyof T, any],
  index?: number,
  item?: T
) => [string | number | symbol, any];

/**
 * Converts a reference type to an object
 * @param {object} item value to perform function on
 * @returns an objectified value
 */
export default function objectify<T extends object>(
  item: T,
  callbackFn?: callback<T>,
  thisArg?: any
) {
  const result = {};
  for (var i = 0, j = Object.keys(item), entries = []; i < j.length; i++)
    entries[i] = [j[i], item[i]];
  let arr = !entries.length
    ? Array.from(<Array<any>>item, (i) => (Array.isArray(i) ? i : [i]))
    : entries;
  for (let i = 0; i < arr.length; i++) {
    const [key, value] = callbackFn
      ? callbackFn.call(thisArg, arr[i], i, item)
      : arr[i];
    result[key] = value;
  }
  return result;
}
