function partlist(arr) {
  const result = [];
  
  // создаем цикл, который будет добавлять части в результирующий цикл
  for (let i = 1; i < arr.length; i += 1) {
    // вырезаем части в зависимости от индекса и склеиваем в строку
    const parts = [arr.slice(0, i).join(' '), arr.slice(i).join(' ')];
    result.push(parts);
  }
  return result;
}
