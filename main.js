// // 1. Написати функцію, яка приймає один параметр. При першому виклику вона запам'ятовує його, при другому — підсумовує переданий параметр з тим, що передали перший раз і тд. Все це із замиканнями, наприклад: sum(3) = 3 sum(5) = 8 sum(20) = 28

// function resPlusNum () {
//     let res = 0;

//     return function(number) {
//         res += number;
//         return res
//     }
// }

// const sum = resPlusNum();

// console.log (sum(3));
// console.log (sum(5));
// console.log (sum(8));
// console.log (sum(10));
// console.log (sum(25));
// console.log (sum(44));
// console.log (sum(53));
// console.log (sum(67));
// console.log (sum(90));
// console.log (sum(141));
// console.log (sum(299));
// console.log (sum(415));

// // 2. Даний масив з елементами різних типів. Створити функцію, яка вираховує середнє арифметичне лише числових елементів даного масиву.

// const array = ['a', 'Hello', 2, 'Stan', 'b', 'check', '3', 4, 111, 'number', 'string', 'slim', 'another number', 'and one more number', 5, null];

// function findNumSum() {
//     return (reducedArray / filteredArray.length)
// }

//     let filteredArray = array.filter(el => typeof el === 'number');
//     let reducedArray = filteredArray.reduce((acc, res) => acc + res); 
// console.log(findNumSum());

// // 3. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x та y, рядок znak. У змінній znak може бути значення +, -, *, /, %, ^ (ступінь). Вивести результат математичної дії, вказаної у змінній znak. Обидва числа та знак виходять від користувача.

// function doMath(x, sign, y) {
//     let result = 0;

//     switch (sign) {
//       case "+":
//         result = x + y;
//         break;
//       case "-":
//         result = x - y;
//         break;
//       case "*":
//         result = x * y;
//         break;
//       case "/":
//         result = x / y;
//         break;
//       case "%":
//         result = x % y;
//         break;
//       case "^":
//         result = Math.pow(x, y);
//         break;
//       default:
//         console.log("Idk this operator");
//     }
//     return result;
//   }
// let x = Number(prompt('Write the first number:'));
// let y = Number(prompt('Write the second number:'))
// let sign = prompt('Write a sign:')


// console.log(doMath(x, sign, y));

// // 4. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву та внутрішніх масивів задає користувач. Значення всіх елементів масивів задає користувач.

// function createArray(lenght, elements) {
//     let userArray = [];

//     for (let i = 0; i < lenght; i++) {
//       userArray[i] = [];
//         for (let j = 0; j < elements; j++) {
//           userArray[i][j] = prompt(`Enter the value of the [${i}][${j}]:`);
//         }
//     }
//     return userArray;
//   }

// let lenght = Number(prompt('Enter the lenght of the array:'));
// let elements = Number(prompt('Enter the number of elements in every new array:'));

// let twoDimensionalArray = createArray(lenght, elements);

// console.log(twoDimensionalArray);

// 5. Створити функцію, яка видаляє з рядка всі символи, які ми передали другим аргументом. 'func("hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач

function deleteLetters(text, toDelete) {
  let filteredArray =  userTextArray.filter(item => !toDelete.includes(item));
  console.log(filteredArray.join(''));
}

let userText = prompt('Enter the text you want to filter:');
let userTextArray = userText.split('');
let text = userTextArray.join();
let lettersToDelete = prompt('Enter letters you want to delete');
let toDelete = lettersToDelete.split('')

deleteLetters(text, toDelete);