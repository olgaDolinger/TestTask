export const useGetFromLocalStorage = (key: string, initialValue: undefined | undefined[]) => {
    return localStorage.getItem(key)
        ? JSON.parse(localStorage.getItem(key) || `${initialValue}`)
        : initialValue
}