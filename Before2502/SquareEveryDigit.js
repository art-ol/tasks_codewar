function squareDigits(number){
  // создаем массив, куда будем записывать цифры
  const digits = [];
  
  // разбиваем число на цифры
  while (number > 0) {
    const digit = number % 10;
    digits.push(digit);
    number = Math.floor(number / 10);
  }
  digits.reverse();
  
  // находим квадрат каждой цифры и переписываем значение
  for (let i = 0; i < digits.length; i += 1) {
    digits[i] = digits[i] ** 2;
  }
  
  // Переводим массив в строку, а потом в число
  const result = Number(digits.join(''));
  return result;
}
