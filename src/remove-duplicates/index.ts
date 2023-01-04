export const removeDuplicates = <T extends any[]>(arr: T): T => Array.from(new Set(arr)) as T
