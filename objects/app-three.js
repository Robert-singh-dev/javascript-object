const movie = {
  actor: "Kavin",
  music: "Arr",
  director: "Lokesh",
  producer: "Anbu",
};

// destructuring the object
// assign a object value as a variable

// const { music: myFavMusicDirector } = movie;
// console.log(myFavMusicDirector);

const { music: myFavMusicDirector, director: myFavDirector } = movie;
console.log(myFavMusicDirector);
console.log(myFavDirector);

// get object properties keys into variables

// const { actor, music, director, producer } = movie;
// console.log(actor);

// another example for destructure

const { music } = movie;

function sings({ music }) {
  return music;
}

console.log(sings(movie));
