const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = arr => arr.map(val => (val < 10 ? val * 10 : val));

const rmvOverScores = arr => arr.filter(val => val <= 100);

const rmvZeroScores = arr => arr.filter(val => val > 0);

const scoresSum = arr => arr.reduce((sum, val) => sum + val, 0);

const scoresCnt = arr => arr.reduce((cnt, val) => cnt + 1, 0);

//Convert each statement to a function that can accept and act on any array.
//DONE

//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
const filterScores = pipe(
  rmvZeroScores,
  rmvOverScores
);

//Compose a function that will do all the modifications to an array. Test it using the scores array.
const modifyArray = pipe(
  boostSingleScores,
  filterScores
);

console.log(modifyArray(scores));

//Create a function that will accept an array and return the average.
//Use the function that sums scores and the function that counts scores or the length property.

//probably breaks the functional paradigm
const average = arr => scoresSum(arr) / arr.length;

//Compose a function that will do all the modifications on an array and return an average.
const final = pipe(
  modifyArray,
  average
);

console.log(final(scores));
