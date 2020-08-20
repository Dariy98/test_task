const getMaxDays = (arr) => {
  let data = [0, 0];

  const getMaxSum = (num) => {
    if (num < 2) {
      return num ? arr[0] : 0;
    }
    if (data[num]) {
      return data[num];
    } else {
      return (data[num] = Math.max(
        getMaxSum(num - 1),
        arr[num - 1] + getMaxSum(num - 2)
      ));
    }
  };

  return getMaxSum(arr.length);
};

// console.log(getMaxDays([18, 28, 1, 9, 29, 13, 5]));
// console.log(getMaxDays([6, 2, 8, 3, 9, 1]));
// console.log(getMaxDays([7, 1, 2, 5]));
// console.log(getMaxDays([3, 6, 4]));
// console.log(getMaxDays([4, 10, 3, 1, 5]));

// const getMaxDays = (arr) => {
// let evenNum = 0;
// let oddNum = 0;
// let triplets = 0;
// let threePlusEven = 0;
// let oddPlusThree = 0;

//   arr.forEach((num, index) => {
// if (index % 2 === 0) {
//   evenNum = evenNum + num;
// }
// if (index % 2 === 1) {
//   oddNum = oddNum + num;
// }
// if (index % 3 === 0) {
//   triplets = triplets + num;
// }
// if (index === 5) {
//   threePlusEven = triplets + num;
// }
// if (index % 3 === 1) {
//   oddPlusThree = oddPlusThree + num;
// }
//   });

//   const data = [evenNum, oddNum, triplets, threePlusEven, oddPlusThree];
//   console.log(data);
//   return Math.max.apply(null, data);
// };
