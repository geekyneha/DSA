const richestWealth = (accounts) => {
  let MaxWealth = 0;
  for (let i = 0; i < accounts.length; i++) {
    let sum = 0;
    for (let j = 0; j < accounts[i].length; j++) {
      sum += accounts[i][j];
    }
    MaxWealth = Math.max(MaxWealth, sum);
  }
  return MaxWealth;
};

console.log(
  richestWealth([
    [1, 2, 3],
    [3, 4, 5],
    [3, 4, 5],
  ])
);

// var maximumWealth = function(accounts) {
//     return Math.max(
//       ...accounts.map((account) =>
//         account.reduce((acc, wealth) => acc + wealth, 0)
//       )
//     );
//   };
