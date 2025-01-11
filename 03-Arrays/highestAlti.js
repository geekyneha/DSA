const highest = (gain) => {
  let arr = [0];
  let sum = 0;
  for (let i = 0; i < gain.length; i++) {
    sum = sum + gain[i];
    arr.push(sum);
  }
  return Math.max(...arr);
};

console.log(highest([-5, 1, 5, 0, -7]));
