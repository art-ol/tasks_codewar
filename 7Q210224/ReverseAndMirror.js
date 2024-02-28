function reverseAndMirror(s1,s2) {
  const changeSizeLetter = letter =>
    (letter.toUpperCase() === letter) ? letter.toLowerCase() : letter.toUpperCase();

  /*  first solve
    let arr1 = s1.split('');
    let arr2 = s2.split('');

    arr1 = arr1.map(changeSizeLetter);
    arr2 = arr2.map(changeSizeLetter);
    const result = arr2.reverse().join('') + "@@@" + arr1.reverse().join('') + arr1.reverse().join('');
  */
    
    s1 = [...s1].map(changeSizeLetter).join('');
    s2 = [...s2].map(changeSizeLetter).reverse().join('');
    
    const result = `${s2}@@@${[...s1].reverse().join('')}${s1}`;

    return result;
}
