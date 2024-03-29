const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 }
];

var newScore = function(arr, name, amt) {
  arr.forEach(function(val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.score = val.score + amt;
    }
  });
  return arr;
};

var newTries = function(arr, name) {
  arr.forEach(function(val) {
    if (val.name.toLowerCase() === name.toLowerCase()) {
      val.tries++;
    }
  });
  return arr;
};

//ok for deep cloning
const cloneObject = obj => JSON.parse(JSON.stringify(obj));

const newArray1 = newScore(cloneObject(users), "Henry", 30);
const newArray2 = newTries(cloneObject(newArray1), "Henry");
