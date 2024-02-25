function gimmeTheLetters(sp) {
  // записываем в константы начальный и последний символ
  const firstLetter = sp.at(0);
  const lastLetter = sp.at(-1);
  
  // записываем в константу алфафит
  const allLetter = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  const arr = [];
  
  // записываем индексы букв в алфавите
  const firstIndex = allLetter.indexOf(firstLetter);
  const lastIndex = allLetter.indexOf(lastLetter);
  
  // пробегаемся по алфавиту с начального до конечного по нужным индексам и зыаписываем в массив
  for (let i = firstIndex; i <= lastIndex; i += 1) {
    arr.push(allLetter[i]);
  }
  
  // возвращаем искомую строку
  return arr.join('');
}

console.log(gimmeTheLetters('a-s'));