const movies = require('./moviedata.json')

movies.map(movie => {
    movie.Year = +movie.Year
    movie.imdbRating = +movie.imdbRating
    movie.imdbVotes = +(movie.imdbVotes.replace(/,/g, ''))
    movie.Actors = movie.Actors.split(', ')
})
//console.log('movie', movies)



/* EX 1
1. Year = 1962 - 1972
2. imdbRating max and imdbVotes max
3. console.log "Best rated movie is Title, directed by Director and was released on Released."
4. console.log "Most rated movie is Title, directed by Director and was released on Released."
*/
console.log('Ex 1')
const movieBetween = movies.filter(movie => {
    if (movie.Year >= 1962 && movie.Year <= 1972) {
        return movie
    }
})
// console.log('movieBetween', movieBetween)

const bestRating = movieBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
        return previousValue
     } else{
         return currentValue
    }
})
// console.log('bestRating', bestRating)

const mostRating = movieBetween.reduce((previousValue, currentValue) => {
    if (previousValue.imdbVotes > currentValue.imdbVotes) {
        return previousValue
     } else{
         return currentValue
    }
})
// console.log('mostRating', mostRating)

let bestRatingString = 'Best rated movie is '
bestRatingString += bestRating.Title
bestRatingString += ', directed by '
bestRatingString += bestRating.Director
bestRatingString += ' and was relesed in ' 
bestRatingString += bestRating.Released + '.'

console.log(bestRatingString)

let mostRatingString = 'Mosted rated movie is '
mostRatingString += mostRating.Title
mostRatingString += ', directed by '
mostRatingString += mostRating.Director
mostRatingString += ' and was relesed in ' 
mostRatingString += mostRating.Released + '.'

console.log(mostRatingString)

/* EX 2
1. Genre = Drama
2. imdbRating max and imdbVotes max
3. console.log "Best rated drama is Title, directed by Director and was released on Released."
4. console.log "Most rated drama is Title, directed by Director and was released on Released."
*/
/*const genreMovies = movies.filter((movieGenre) => {
    if (movieGenre.Genre.includes('Drama')) {
        return movieGenre
    }
})
//console.log('Drama', genreMovies)
function findBestRating(array){ // vaata 41 minutist videos
    return  array.reduce(previousValue.imdbRating > currentValue.imdbRating) {
        return previousValue
        } else{
            return currentValue
    }
}

cont bestRatingDrama = findBestRating(includes)

function findMostRated(array) {
    if 
}

const bestRatingDrama
const mostRatedDrama
*/ 
/* EX 3
1. Rated = R
2. console.log "Movies that are rated R are: Title separated by comma."
3. Array of all actors that have made an R rated movie. Do not repeat one actor multiple times!
4. console.log "Actors that played in those movies: Actors separated by comma"
*/

/*function getMoviesR(Rated) {
    return movies.filter((Rate) => {
        return Rate.Rated === Rated
    })
}
const rMovies = getMoviesR('R')
//console.log('rMovies', rMovies)

const ratedRTitles = rMovies.map(movie => {
    return movie.Title
})
console.log('ratedRTitles', ratedRTitles) */

/* let rateString = 'Movies that are rated R are: ' 
for (let i = 0; i < ratedRTitles.length; i++) {
    const ending = i === ratedRTitles.length
    if (ending) {
        rateString += ratedRTitles[i] + '.'
    }else {
        rateString += ratedRTitles[i] + ','
    }
    }
} */

/*console.log('Movies that are rated R are: ' + Title + '.' separated by comma) */
/*let ratedRString = 'Movies that are rated R are: '
ratedRString += ratedRTitles.toString() + '.'
console.log(ratedRString)

let actors = []
rMovies.map(movie => {
    movie.Actors.map(actors) => {
        actors.push(actors)
    })
})
let uniqueActors = [...new Set(actors)];
console.log('uniqueActors', uniqueActors)

let actorString = 'Actors that played in those movies> '
actorString += uniqueActors.join(', ') + '.'
console.log(actorString   ) */

/*console.log('Actors that played in those movies: ' + Actors + '.' separated by comma" */