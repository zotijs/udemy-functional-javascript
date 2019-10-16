const scores = [50, 6, 100, 0, 10, 75, 8, 60, 90, 80, 0, 30, 110];

//Any scores that are below 10 needs to be multiplied by 10 and the new value included.

//Remove any scores that are over 100.

//Remove any scores that are 0 or below.

const newScores = scores
  .map(score => (score < 10 ? score * 10 : score))
  .filter(score => score <= 100)
  .filter(score => score > 0);

//Sum the scores.
const sum = newScores.reduce((acc, score) => acc + score, 0);

//Provide a count for the number of scores still remaining.
const count = newScores.reduce((acc, score) => ++acc, 0);

console.log("newScores: ", newScores);
console.log("sum: ", sum);
console.log("count: ", count);
