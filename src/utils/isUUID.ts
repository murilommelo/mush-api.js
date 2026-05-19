const UUIDRegexp =
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;

export function isUUID(arg: unknown) {
  return typeof arg === "string" && UUIDRegexp.test(arg);
}
