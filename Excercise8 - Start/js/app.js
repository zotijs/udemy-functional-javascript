const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

const boostSingleScores = _.map(val => (val < 10 ? val * 10 : val));

const rmvOverScores = _.filter(val => val <= 100);

const rmvZeroScores = _.filter(val => val > 0);

//Convert each statement to a function that can accept and act on any array.
//Compose a function that will remove both zero or lower scores and scores over 100. Test it using the scores array.
//Compose a function that will do all the modifications to an array. Test it using the scores array.

const modifications = _.pipe(
  boostSingleScores,
  rmvOverScores,
  rmvZeroScores
);

//Create a function that will accept an array and return the average.
const average = _.mean;
//Compose a function that will do all the modifications on an array and return an average.
const complete = _.pipe(
  modifications,
  average,
  console.log
);
