function testResult(array) {
  const dictionary = { h: 0, a: 0, l: 0 };
  let sum = 0;

  // пробегаем по массиву оценок
  for (const mark of array) {
    // находим сумму всех оценок
    sum += mark;

    // в зависимости от оценки добавляем +1 по ключу
    if (mark === 10 || mark === 9) {
      dictionary.h += 1;
    } else if (mark === 8 || mark === 7) {
      dictionary.a += 1;
    } else if (mark > 0 && mark < 7) {
      dictionary.l += 1;
    }
  }

  // находим среднее значение оценок в классе
  const averageMark = Math.round(sum / array.length * 1000) / 1000;

  // создаем массив с результирующим значением
  const result = [averageMark, dictionary];

  // и добавляем в массив фразу, если оценки только превосходные
  if (dictionary.a === 0 && dictionary.l === 0 && dictionary.h !== 0) {
    result.push('They did well');
  }
  return result;
};
