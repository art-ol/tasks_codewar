function redarr(arr) {
  // создаем массив уникальных значений с помощью множества и сортируем
  const sortArr = [...new Set(arr)].sort();
  
  // создаем объект и заполняем отсортированным массивом по порядку
  const objs = {};
  for (let i = 0; i < sortArr.length; i += 1) {
    objs[i] = sortArr[i];
  }

  return objs;
}
// массива было бы достаточно раз у нас ключи идут с нуля по индексу