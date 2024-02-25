const getFib = (n) => {
  if (n < 2) {
    return n;
  }

  return getFib(n - 2) + getFib(n - 1);
};

const start = Date.now();
getFib(46);
const time = Date.now() - start;
console.log(time);