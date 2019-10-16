const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 }
];

//(used to) Modifies Data
var storeUser = function(arr, user) {
  return arr.map(item =>
    item.name.toLowerCase() === user.name.toLowerCase() ? user : item
  );
};

//Pure Functions
const cloneObj = function(obj) {
  return JSON.parse(JSON.stringify(obj));
};

var getUser = function(arr, name) {
  return arr.reduce(
    (acc, item) =>
      item.name.toLowerCase() === name.toLowerCase() ? item : acc,
    null
  );
};

var updateScore = function(user, newAmt) {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

var updateTries = function(user) {
  if (user) {
    user.tries++;
    return user;
  }
};

const usr = getUser(users, "Henry");
const usr1 = updateScore(cloneObj(usr), 30);
const usr2 = updateTries(cloneObj(usr1));
const newArray = storeUser(users, usr2);
