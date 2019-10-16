let users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 }
];

//Non-Pure Function
const storeUser = (arr, newUser) => {
  const i = arr.findIndex(user => {
    return user.name.toLowerCase() === newUser.name.toLowerCase();
  });

  arr[i] = newUser;
};

//Pure Functions

const getUser = (arr, name) => {
  return arr.find((user, index) => {
    return user.name.toLowerCase() === name.toLowerCase();
  });
};

const updateScore = (user, newAmt) => {
  if (user) {
    user.score += newAmt;
    return user;
  }
};

const updateTries = user => {
  if (user) {
    user.tries++;
    return user;
  }
};

let usr = getUser(users, "Henry");
let usr1 = updateScore(usr, 30);
let usr2 = updateTries(usr1);
storeUser(users, usr2);
