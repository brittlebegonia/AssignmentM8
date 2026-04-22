//STEP 1
// let movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses"];
// console.log(movies[1]);

//STEP 2
// movies = new Array(5);
// movies[0] = "13 Going on 30";
// movies[1] = "The Proposal";
// movies[2] = "Crazy Rich Asians";
// movies[3] = "Clueless";
// movies[4] = "27 Dresses";

// console.log(movies[0]);

//STEP 3
// movies = new Array(5);
// movies[0] = "13 Going on 30";
// movies[1] = "The Proposal";
// movies[2] = "Crazy Rich Asians";
// movies[3] = "Clueless";
// movies[4] = "27 Dresses";

// movies.splice(2, 0, "The Wedding Planner");
// console.log(movies.length);

//STEP 4
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses"];
// delete movies[0];
// console.log(movies);

//STEP 5
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];

// for (let index in movies) {
//     console.log(movies[index]);
// }

//STEP 6
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];
// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 7
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];
// movies.sort();

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 8
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];
// let leastFavMovies = ["Cats", "Goodfellas", "Top Gun"];

// console.log("Movies I like:\n");

// for (let movie of movies) {
//     console.log(movie);
// }

// console.log("\nMovies I regret watching:\n");

// for (let movie of leastFavMovies) {
//     console.log(movie);
// }

//STEP 9
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];
// let leastFavMovies = ["Cats", "Goodfellas", "Top Gun"];

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// for (let movie of movies) {
//     console.log(movie);
// }

//STEP 10
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];
// let leastFavMovies = ["Cats", "Goodfellas", "Top Gun"];

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// console.log(movies[movies.length - 1]);

//STEP 11
// movies = ["13 Going on 30", "The Proposal", "Crazy Rich Asians", "Clueless", "27 Dresses", "Bride Wars", "Just Like Heaven"];
// let leastFavMovies = ["Cats", "Goodfellas", "Top Gun"];

// movies = movies.concat(leastFavMovies);
// movies.sort().reverse();

// console.log(movies[0]);

//STEP 12
// movies = ["13 Going on 30", "Cats", "The Proposal", "Clueless", "27 Dresses"];

// let badMovies = ["Cats", "27 Dresses"];
// let replacements = ["Crazy Rich Asians", "Bride Wars"];

// let count = 0;

// for (let i = 0; i < movies.length; i++) {
//     if (badMovies.includes(movies[i])) {
//         movies[i] = replacements[count];
//         count++;
//     }
// }

// console.log(movies);

//STEP 13
// movies = [
//     ["13 Going on 30", 1],
//     ["The Proposal", 2],
//     ["Crazy Rich Asians", 3],
//     ["Clueless", 4],
//     ["27 Dresses", 5]
// ];

// movies.forEach(function(item) {
//     let names = item.filter(value => typeof value === "string");
//     console.log(names[0]);
// });

//STEP 14
// let employees = ["ZAK", "JESSICA", "MARK", "FRED", "SALLY"];

// let showEmployee = function(arr) {
//     console.log("Employees:\n");
//     for (let employee of arr) {
//         console.log(employee);
//     }
// };

// showEmployee(employees);

//STEP 15
// function filterValues(arr) {
//     return arr.filter(Boolean);
// }

// console.log(filterValues([58, '', 'abcd', true, null, false, 0]));

//STEP 16
// function getRandomItem(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// console.log(getRandomItem([1,2,3,4,5,6,7,8,9,10]));

//STEP 17
// function getLargestNumber(arr) {
//     return Math.max(...arr);
// }

// console.log(getLargestNumber([12, 55, 8, 84, 25]));