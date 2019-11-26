const getNthFib = n => {
  if (n === 1) {
    return 0;
  } else if (n === 2) {
    return 1;
  } else {
    return getNthFib(n - 1) + getNthFib(n - 2);
  }
};

const fibTest = () => {
  let nth = 13;
  let list = [];
  for (let i = 1; i < nth + 1; i++) {
    const result = getNthFib(i);
    list.push(result);
  }
  console.log(`Fibonacci sequence for ${nth} is ${list}`);
};

module.exports = { getNthFib, fibTest };
