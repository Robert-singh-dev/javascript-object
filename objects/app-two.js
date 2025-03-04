const movie = {
  actor: "Kavin",
  music: "Arr",
  director: "Lokesh",
  producer: "Anbu",
};

// insert object value
movie.actress = "Trisha";

// delete object
delete movie.producer;

// to get Object detils "keys" and "values"
console.log(Object.keys(movie));

// for in loop used inside a object
// syntex for(let "eg:i in normal loop" in "object name")
for (let job in movie) {
  //   "console.log(movie.job);" this is wrong formet
  console.log(movie[job]); //this is corret formet

  //   console.log(`${job}, it's ${movie[job]}`); //this is another formet
  console.log(job);
}
