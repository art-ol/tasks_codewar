function sumItUp(numbersWithBases){
  // создаем базу возможных цифр
  const maxBase = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const callback = (acc, numberWithBase) => {
    const [strNumber, base] = numberWithBase;
    let number = 0;

    // проходим циклом по строке числа
    for (let i = 0; i < strNumber.length; i += 1) {
      // берем цифру согласно ее индекса базы
      const decimalDigit = maxBase.indexOf(strNumber[strNumber.length - 1 - i].toUpperCase());
      // прибавляем в искомое число согласно порядку цифры
      number += decimalDigit * (base ** i); 
    }
    // подсчитываем искомую сумму
    acc += number;
    return acc;
  };

  const result = numbersWithBases.reduce(callback, 0);
  return result;
}

console.log(sumItUp([["101",2], ["10",8]])); // 13
console.log(sumItUp([["ABC",16], ["11",2]])); // 2751