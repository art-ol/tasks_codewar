function deleteNth(arr,n){
  // создаем объект, в котором будем хранить число повторений числа
  const countNumbers = {};

  // используем filter(), чтобы вернуть отфильтрованный массив
  return arr.filter((item) => {
    // берем или создаем свойство и увеличиваем на 1
    countNumbers[item] = (countNumbers[item] || 0) + 1;
    // возвращаем нужный нам предикат
    return countNumbers[item] <= n;
  });
}

console.log(deleteNth([20,37,20,21], 1));