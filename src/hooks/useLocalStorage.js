import React from 'react'

export const useLocalStorage = (defaultValue,key) => {
    const [value,setValue] = React.useState(() => {
        const localStorageItem = window.localStorage.getItem(key);
        return localStorageItem !== null ? JSON.parse(localStorageItem) : defaultValue;
    });
    React.useEffect(() => {window.localStorage.setItem(key, JSON.stringify(value))}, [key,value]);

    return [value,setValue];

}

