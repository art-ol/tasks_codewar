function replaceAll(seq, find, replace) {
  // проверяем на строку, преобразуем в массив и используем рекурсию
  if (typeof seq === 'string') {
    return replaceAll(seq.split(''), find, replace).join('');
  }
  // с помощью мапы проходим по массиву и заменяем нужные итемы
  const result = seq.map((item) => (item === find ? replace : item));
  return result;
}

console.log(replaceAll('Sasha', 'a', 'u'));