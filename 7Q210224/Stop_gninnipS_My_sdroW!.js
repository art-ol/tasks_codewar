function spinWords(string){
  //TODO Have fun :)
  return string.split(' ')
    .map(word =>
      (word.length > 4 ? word.split('').reverse().join('') : word))
    .join(' ');
}
