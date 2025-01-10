const divsors = (num) => {
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      console.log(i);
    }
  }
  return;
};
divsors(36);
