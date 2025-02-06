import './style.css'

import  './basic/1';
import  './basic/2';
import  './basic/3';
import  './basic/4';
import  './basic/5';
import  './basic/6';
import  './basic/7';

import  './generics/1';
import  './generics/2';
import  './generics/3';
import  './generics/4';
import  './generics/5';
import  './generics/6';


// src/main.ts

// function add(num1: number, num2: number) {
// return num1 + num2;
// }

// console.log(add(1, 2));  

// let isDone: boolean = false;

// let decimal: number = 6;     // десяткові
// let float: number = 3.14;    // речові або число з плаваючою крапкою
// let hex: number = 0xf00d;    // шістнадцяткове
// let binary: number = 0b1010; // двійкове
// let octal: number = 0o744;   // вісімкове
// let color: string = "blue";

// let empty: null = null;
// let notParam: undefined = undefined;

// const num = 10;
// const str = 'Some string';
// const bool = true;
// const empty = null;
// const notParam = undefined;

// function foo (num: number, str: string, bool: boolean, empty: null) {
// Some logic
// };

// function foo (num = 10, str = 'Some string', bool = true, empty = null){
// Some logic
//   }
  
// const obj: object = {};
// const obj: {} = {};

// let user = {
//  name: "Tom",
//  age: 30
//   };
  
// let user: { name: string; age: number } = {
//   name: "Tom",
//   age: 30
// };

// type User = {
//   name: string;
//   age: number;
// };

// let user: User ={
//   name: "Tom",
//   age: 30
// }

// interface User {
//   name: string;
//   age: number;
// }

// let arrString: string[];
// let arrNumber: number[];
// let matrix: number[][] = [[1, 2], [3, 4]];
// console.log(matrix[1][1]);
// let mixed: (number | string)[] = [1, 'two'];
// let numbers: Array<number> = [1, 2, 3, 4, 5];

// let user: { name: string; age: number }[] = [{ name: 'Tom', age: 30 }, { name: 'Jack', age: 25 }, { name: 'Alice', age: 32 } ]

// type User = { name: string; age: number };

// let users: User[] = [ { name: 'Tom', age: 30 }, { name: 'Jack', age: 25 }, { name: 'Alice', age: 32 }]

// let arrAny: any[];
// arrAny = [123, 'TEXT', { name: 'Tom' }, [1, 2, 3]];


// function fetchUserData(id: string, callback: (data: any) => void): void {
//   // Тут може бути якийсь запит, але ми його заповнимо самі
//   const responseData = { name: 'Tom' };

//   callback(responseData);
// }

// // Використання функції:
// fetchUserData('123', (data) => {
//   console.log(data.name); // TypeScript не викличе помилку, навіть якщо поле name не існує
// });

// function greet(): string {
//   return "Hello, world!";
//   }
//   let result = greet();

  // type User = {
  //   id: number;
  //   name: string;
  // }

  // const getUserNames = (users: User[]): string[] => {
  //   return users.map((user) => user.name);
  // }

  // const users: User[] = [
  //   { id: 1, name: 'Alice' },
  //   { id: 2, name: 'Bob' },
  //   { id: 3, name: 'Charlie' },
  // ];

  // let result = getUserNames(users);
  // console.log(result);
  

  // function logMessage(message: string): void {
  //   console.log(message);
  // }
  
  // logMessage('Hello, world!');

//   function doSomething(callback: ()=> void ){
//     callback();
//   }

//   doSomething(() => {
//     console.log('Callback function!');
//   });

//   // Функція, яка завжди викидає помилку
// function throwError(message: string): never {
//   throw new Error(message);
// }

// // Функція з нескінченним циклом
// function infiniteLoop(): never {
//   while (true) {}
// }

// let myFunc: (firstArg: string, secondArg: number ) => void;

// myFunc = (first: string, second: number) => {
// console.log(`First: ${first}, Second: ${second}`);
// };

// myFunc('Hello', 42);

// // Визначення типу функції, який приймає два числа та повертає число
// type CallbackType = (num1: number, num2: number) => number;

// // Функція, яка приймає два числа та функцію зворотного виклику, застосовує цю функцію до чисел та виводить результат
// function calc(param1: number, param2: number, callback: CallbackType): void {
//   console.log('Result:', callback(param1, param2));
// }

// // Приклади використання calc з різними функціями зворотного виклику
// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// type CallbackType = (...nums: number[]) => number;

// function calc(param1: number, param2: number, callback: CallbackType): void {
//  console.log('Result:', callback(param1, param2));
// }

// calc(1, 1, (num1, num2) => num1 + num2);
// calc(10, 5, (num1, num2) => num1 - num2);

// type Person = {
// name: string;
// age?: number;
// }; 
// let user: Person = { name: 'Alice', }; 
// user.age = 27;

// console.log(user);
