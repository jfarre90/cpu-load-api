export const isString = (value: any): value is string => typeof value === 'string';

export const isNumber = (value: any): value is number => !isNaN(parseFloat(value)) && isFinite(value);

export const isDefined = <T>(item: T | undefined): item is T => {
  return !!item;
};
