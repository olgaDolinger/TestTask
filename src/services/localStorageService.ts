export const getFromLocalStorage = <T,>(key: string, initialValue: T) => {
    return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key) || `${initialValue}`)
        : initialValue
}


export const setInLocalStorage = <T,>(key: string, value: T) => {
    localStorage.setItem(key, JSON.stringify(value))
}
