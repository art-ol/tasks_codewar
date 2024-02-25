function removeSmallest(numbers) {
  // берем начальные значения массива
  let min = numbers[0];
  let firstMinIndex = 0;

  // проходим по массиву и находим индекс первого минимального значения
  for (let i = 0; i < numbers.length; i += 1) {
    if (min > numbers[i]) {
      min = numbers[i];
      firstMinIndex = i;
    }
  }

  // возвращаем новый массив и двух кусков начального массива, исключая первое минимальное значение
  return [...numbers.slice(0, firstMinIndex), ...numbers.slice(firstMinIndex + 1)];
}

console.log(removeSmallest([1,2,3,4,5]));
console.log(removeSmallest([5,3,2,1,4]));
console.log(removeSmallest([2,2,1,2,1]));