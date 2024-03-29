const users = [
  { name: "James", score: 30, tries: 1 },
  { name: "Mary", score: 110, tries: 4 },
  { name: "Henry", score: 80, tries: 3 }
];

// var storeUser = function(arr, user) {
//     return arr.map(function(val) {
//         if (val.name.toLowerCase() === user.name.toLowerCase()) {
//             return user;
//         } else {
//             return val;
//         }
//     });
// };

// const cloneObj = function(obj) {
//     return JSON.parse(JSON.stringify(obj));
// };

// var getUser = function(arr, name) {
//     return arr.reduce(function(obj, val) {
//         if (val.name.toLowerCase() === name.toLowerCase()) {
//             return val;
//         } else {
//             return obj;
//         }
//     }, null);
// };

// var updateScore = function(user, newAmt) {
//     if (user) {
//         user.score += newAmt;
//         return user;
//     }
// };

// var updateTries = function(user) {
//     if (user) {
//         user.tries++;
//         return user;
//     }
// };

// const getUsersUser = pipe(
//     curry(getUser)(users),
//     cloneObj);

// const getHenry = function() {
//     return getUsersUser("Henry");
// };

// const updateHenry = pipe(
//     curry(updateScore)(getHenry()),
//     cloneObj,
//     updateTries,
//     curry(storeUser)(users));

/*
Refactor the code to use the Ramda library. There are multiple places that could be modify to use Ramda.
*/

const storeUser = (arr, user) =>
  R.map(val => (R.eqBy(R.toLower, val.name, user.name) ? user : val), arr);

const getUser = (arr, name) =>
  R.reduce(
    (obj, val) => (R.eqBy(R.toLower, val.name, name) ? R.clone(val) : obj),
    null,
    arr
  );

const updateScore = (user, newAmt) =>
  R.assoc("score", (user.score += newAmt), user);

const updateTries = user => R.assoc("tries", user.tries + 1, user);

const getCurriedUser = R.curry(getUser)(users);

const updateHenry = R.pipe(
  R.curry(updateScore)(getCurriedUser("Henry")),
  updateTries,
  R.curry(storeUser)(users)
);
