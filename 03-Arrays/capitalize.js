const capitalizeWord = (s) => {
  console.log(s.toLowerCase().replace(/\b\w/g, (l) => l.toUpperCase()));
};

capitalizeWord("this IS CApitaLize");

var capitalizeTitle = function (title) {
  console.log(
    title
      .toLowerCase()
      .split(" ")
      .map((word) =>
        word.length > 2 ? word[0].toUpperCase() + word.slice(1) : word
      )

      .join(" ")
  );
};
capitalizeTitle("i love LEETCODE");
