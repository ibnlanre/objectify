/**
 * Converts a reference type to an object
 * @param {object} item value to perform function on
 * @returns an objectified value
 */
export default function objectify(item: object) {
  let entr = Object.entries(item);
  let arr = entr.length ? entr : Array.from(<Array<any>>item);
  let reducer = (acc, [key, value]) => ({ ...acc, [key]: value });
  arr = arr.map((item) => (Array.isArray(item) ? item : [item]));
  return arr.reduce(reducer, {});
}
