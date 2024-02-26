function narcissistic(value) {
  let number = value;
  const digits = [];
  let amount = 0;
  
  // разбиваем число на цифры
  while (number > 0) {
    const digit = number % 10;
    digits.push(digit);
    number = Math.floor(number / 10);
  }
  
  
  for (const digit of digits) {
    amount += Math.pow(digit, digits.length);
  }
  
  return value === amount;
}