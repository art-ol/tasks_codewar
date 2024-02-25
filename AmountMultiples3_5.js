function solution(number){
  if (number < 0) return 0;
  
  // количество чисел, кратных делителю
  const getCountNumbersMultiples = (divider) => Math.floor((number - 1) / divider);
  
  // сумма арифметической прогрессии
  const getAmountNumbersMultiples = (divider, count) => (2 * divider + divider * (count - 1)) / 2 * count;
  
  const divider1 = 3;
  const divider2 = 5;
  const divider1_2 = divider1 * divider2;
  
  const count1 = getCountNumbersMultiples(divider1);
  const count2 = getCountNumbersMultiples(divider2);
  const count1_2 = getCountNumbersMultiples(divider1_2);
  
  const amount1 = getAmountNumbersMultiples(divider1, count1);
  const amount2 = getAmountNumbersMultiples(divider2, count2);
  const amount1_2 = getAmountNumbersMultiples(divider1_2, count1_2);
  
  // сумма двух пересекающихся множеств
  const result = amount1 + amount2 - amount1_2;
  return result;
}