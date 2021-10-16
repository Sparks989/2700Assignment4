let allMovies = [];

//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
	var title;
	var rating;
	var haveWatched;
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
	allMovies[allMovie.length + 1] = movie;
}

//iterate through all elements of allMovies array
//print out to console in a correct format
//print out the total number of movies in allMovies array
let printMovies = () => {
	for (var i = allMovies.length - 1; i >= 0; i--) {
	console.log(allMovies[i]);
	}
	console.log(allMovies.length);
}


//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
let highRatings = (rating) => {
	const highMovie = [];
	for(i = 0; i < allMovies.length; i++){
		if(movie[i].rating > 70){
			highMovie[i] = allMovies[i];
		}
	}
	console.log(highMovie);
	console.log(highMovie.length);
}


//Toggle the 'haveWatched' property of the specified movie 
let changeWatched = (title) => {
	let x = 0;
	for(i = 0; i < allMovies.length; i++){
		if(allMovies[i].title.equals(title)){
			x = i;
		}
	}
	allMovies[i].haveWatched != allMovies[i].haveWatched;
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, false);


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);