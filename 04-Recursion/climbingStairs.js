const climbingStairs = (n) => {
  if (n == 0 || n == 1) return 1;
  return climbingStairs(n - 1) + climbingStairs(n - 2);
};
console.log(climbingStairs(6));
// It will give TLE
