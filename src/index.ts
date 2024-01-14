// Ejercicio 1

declare const age: number;

declare const phoneNumber: string;

interface Person {
  name: string;
  age: number;
  phoneNumber: string;
}

declare const person: Person;

declare const isAdult: (age: number) => boolean;

declare const phoneNumberPosition: (
  phoneNumber: string,
  phoneNumbersToSearch: string[]
) => number | undefined;

declare const getPersonData: ({ name, age, phoneNumber }: Person) => Person;

// Ejercicio 2

// declare function plus(textA: string, textB: string): string;
// declare function plus(numberA: number, numberB: number): number;
// declare function plus(
//   textOrNumberA: string | number,
//   textOrNumberB: string | number
// ): string | number

function plus(textA: string, textB: string): string;
function plus(numberA: number, numberB: number): number;
function plus(
  textOrNumberA: string | number,
  textOrNumberB: string | number
): string | number {
  if (typeof textOrNumberA === "string" && typeof textOrNumberB === "string") {
    return textOrNumberA + textOrNumberB;
  }

  if (typeof textOrNumberA === "number" && typeof textOrNumberB === "number") {
    return textOrNumberA + textOrNumberB;
  }

  return "Invalid input";
}

console.log(plus(7, 7)); // 14
console.log(plus("7", "7")); // 77
console.log(plus("7", 7)); // No se puede sumar, pero tampoco cumple con las sobrecargas posibles y TS lo detecta

// Ejercicio 3

// declare const swapValues: <T, U>(valueA: T, valueB: U) => [U, T];

const swapValues = <T, U>(valueA: T, valueB: U): [U, T] => {
  return [valueB, valueA];
};
