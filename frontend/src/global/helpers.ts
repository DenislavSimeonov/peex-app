export const setLocalStorageItem = (key: string, value: string) =>
  localStorage.setItem(key, JSON.stringify(value));

export const getLocalStorageItem = (key: string) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : undefined;
};

export const removeLocalStorageItem = (key: string) => localStorage.removeItem(key);
