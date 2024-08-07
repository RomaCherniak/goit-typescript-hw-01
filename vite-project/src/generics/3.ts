// У вас є функція merge, яка поєднує два об'єкти. Використовуйте generics, щоб вказати, що ці об'єкти можуть бути будь-якого типу.

function merge<A extends Object, B extends Object> (objA: A, objB: B): Object {
    return Object.assign(objA, objB);
}

export {};