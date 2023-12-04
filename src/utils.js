export const setLocalStorageData = (data, field, type) => {
    let localData
    if (type === 'Object') {
        localData = localStorage.getObj(field)
            ? { ...localStorage.getObj(field), ...data }
            : { ...data }
    }
    if (type === 'Array') {
        localData = localStorage.getObj(field)
            ? [...localStorage.getObj(field), ...data]
            : [...data]
    }

    if (type === 'Players') {
        const dataStorage = localStorage.getObj(field)
        dataStorage.splice(
            localStorage.getObj(field).findIndex((el) => el.id === data.id),
            1,
            data
        )
        localData = dataStorage
    }

    if (type === 'FULL') {
        localData = data
    }

    if (type === 'Primitive') {
        localData = data
    }

    localStorage.setObj(field, localData)
}

export const getLocalStorageData = (field) => {
    return localStorage.getObj(field)
}
