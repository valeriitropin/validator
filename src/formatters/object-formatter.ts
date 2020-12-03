export function objectFormatter(validator: string, field: string | number, params: {[key: string]: any}) {
  return {[validator]: params};
}
