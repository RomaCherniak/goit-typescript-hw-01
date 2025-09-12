// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

type literalType = 'enable' | 'disable';

let union: string | number;
let literal: SwitchStatus;

export {};