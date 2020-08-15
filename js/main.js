const getMaxDays = (arr) => {
  let evenNum = 0;
  let oddNum = 0;
  let triplets = 0;
  let threePlusEven = 0;
  let oddPlusThree = 0;

  arr.forEach((num, index) => {
    if (index % 2 === 0) {
      evenNum = evenNum + num;
    }
    if (index % 2 === 1) {
      oddNum = oddNum + num;
    }
    if (index % 3 === 0) {
      triplets = triplets + num;
    }
    if (index === 5) {
      threePlusEven = triplets + num;
    }
    if (index % 3 === 1) {
      oddPlusThree = oddPlusThree + num;
    }
  });

  const data = [evenNum, oddNum, triplets, threePlusEven, oddPlusThree];

  return Math.max.apply(null, data);
};

// console.log(getMaxDays([6, 2, 8, 3, 9, 1]));
