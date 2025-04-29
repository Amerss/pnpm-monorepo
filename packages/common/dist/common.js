const e = (o) => o == null, n = (o) => o && typeof o == "object", s = (o) => e(o) || Array.isArray(o) && o.length === 0 || n(o) && Object.keys(o).length === 0 || typeof o == "string" && o.trim().length === 0, r = "hello monorepo 123";
export {
  s as isBlank,
  e as isEmpty,
  n as isObject,
  r as stringA
};
