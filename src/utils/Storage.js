
export const saveToStorage = (key, value, useSession = false) => {
    const storage = useSession ? sessionStorage : localStorage;
    storage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key, useSession = false) => {
    const storage = useSession ? sessionStorage : localStorage;
    const item = storage.getItem(key);
    return item ? JSON.parse(item) : null;
};

export const removeFromStorage = (key, useSession = false) => {
    const storage = useSession ? sessionStorage : localStorage;
    storage.removeItem(key);
};
