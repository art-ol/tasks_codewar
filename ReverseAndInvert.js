function reverseInvert(array){
  return array
    // филтруем целые числа
    .filter(item => Number.isInteger(item))
    // используем мап для преобразования
    .map((number) => {
      // вводим переменную для инвертирования числа
      let sign = -1;
      // избавляемся от "-", чтобы не мешал в преобразовании строки
      if (number < 0) {
        number *= -1;
        // меняем знак, т.к. мы уже его поменяли
        sign = 1;
      }
      number = Number(number.toString().split('').reverse().join('')) * (sign);
      return number;
    });
}

console.log(reverseInvert([1,12,'a',3.4,87,99.9,-42,50,5.6]));