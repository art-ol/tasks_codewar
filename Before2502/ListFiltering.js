function filter_list(l) {
  // Используем фильтр по типу данных
  return l.filter((item) => typeof item === 'number');
}
