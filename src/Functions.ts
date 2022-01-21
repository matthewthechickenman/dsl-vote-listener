export function or<T>([...args]: T[]): T | null {   
    let val = args[0]
    for (let i = 1; i < args.length; i++) {
        val = val || args[i]
    }
    return val
}

export function allNull(array: any[] | object) : boolean {
    if (Array.isArray(array)) {
        return array.every(x => x != null)
    } else {
        return Object.values(array).every(x => x != null)
    }
}

export function mixObjects(obj1: object, obj2: object) : object {
    return Object.assign({}, obj1, obj2)
}