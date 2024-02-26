const bearFur = (bears) => {
  const colors = ['black', 'brown', 'white'];
  const [bear1, bear2] = bears;

  // исключаем случаи с неизвестными цветами
  if (!colors.includes(bear1) || !colors.includes(bear2)) return 'unknown';

  // обрабатываем одинаковых медведей
  if (bear1 === bear2) return bear1;

  // рассматриваем оставшиеся варианты
  if (bears.includes('black')) {
    if (bears.includes('white')) {
      return 'grey';
    } else return 'dark brown';
  } else return 'light brown';
};
