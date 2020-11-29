export function objectFormatter(validator: string, field: string | number, params: {[key: string]: any}) {
  params[validator] = true;

  return params;
}
