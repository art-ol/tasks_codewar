function minMax(arr){
  // находим минимум и максимум
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // возвращаем их значения
  return [min, max];
}