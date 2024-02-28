// function findOdd(arr) {
//   //happy coding!
//   const objOfNumbersAndTheirCount = arr.reduce((acc, number) => {
//     acc[number] = (acc[number] || 0) + 1;
//     return acc;
//   },{});

//   for (const [key, value] of Object.entries(objOfNumbersAndTheirCount)) {
//     if (value % 2 !== 0) return Number(key);
//   }
// }


// используя reduce, аккумулируем число с помощью XOR, 
// в итоге все числа, встречающиеся четное кол-во раз дадут 0,
// а единственное число, встречающееся нечетное кол-во раз даст само себя
const findOdd = (arr) => arr.reduce((acc, number) => acc ^ number);
