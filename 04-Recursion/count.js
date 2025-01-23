let num = 0;
const count = () => {
  if (num == 4) return; // Base Condition

  console.log(num); // print count(num)
  num++; // count increment
  return count(); // Recursive calling
};

console.log(count());
