const fighters = [
  ["Ryu", "E.Honda", "Blanka", "Guile", "Balrog", "Vega"],
  ["Ken", "Chun Li", "Zangief", "Dhalsim", "Sagat", "M.Bison"]
];
const initial_position = [0,0];
const moves = ['right', 'down', 'left', 'left', 'left', 'left', 'right'];

function streetFighterSelection(fighters, position, moves){
  const result = [];

  // с помощью forEach пробегаем по moves
  moves.forEach(move => {

    // свичом выбираем 1 из 4 действий
    switch (move) {
      case 'up':
        // случай, когда упираемся вверх
        if (position[0] === 0) {
          // position[0] = fighters.length - 1; // реализация с перепрыгиванием
        } else {
          position[0] -= 1;
        } 
        break;
      case 'right':
        // реализация случая, когда упираемся в край массива
        if (position[1] === fighters[position[0]].length - 1) {
          position[1] = 0;
        } else {
          position[1] += 1;
        }
        break;
      case 'down':
        if (position[0] === fighters.length - 1) {
          // position[0] = 0;
        } else {
          position[0] += 1;
        }
        break;
      case 'left':
        if (position[1] === 0) {
          position[1] = fighters[position[0]].length - 1;
        } else {
          position[1] -= 1;
        }
        break;
    }
    // добавляем в массив бойца после перемещения
    result.push(fighters[position[0]][position[1]]);
  });

  return result;
}

console.log(streetFighterSelection(fighters, initial_position, moves));