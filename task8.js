const movies = require('./moviedata.json')

movies.map(movie => {
    movie.Year = +movie.Year
    movie.imdbRating = +movie.imdbRating
    movie.imdbVotes = +(movie.imdbVotes.replace(/,/g, ''))
    movie.Actors = movie.Actors.split(', ')
})
//console.log('movie', movies)

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

console.log('Ex 2')
const genreMovies = movies.filter((movieGenre) => {
    if (movieGenre.Genre.includes('Drama')) {
        return movieGenre
    }
})
// console.log('Drama', genreMovies)

const bestRating = genreMovies.reduce((previousValue, currentValue) => {
    if (previousValue.imdbRating > currentValue.imdbRating) {
        return previousValue
     } else{
         return currentValue
    }
})
// console.log('bestRating', bestRating)

const mostRating = genreMovies.reduce((previousValue, currentValue) => {
    if (previousValue.imdbVotes > currentValue.imdbVotes) {
        return previousValue
     } else{
         return currentValue
    }
})
// console.log('mostRating', mostRating)

let bestRatingString = 'Best rated drama is '
bestRatingString += bestRating.Title
bestRatingString += ', directed by '
bestRatingString += bestRating.Director
bestRatingString += ' and was relesed in ' 
bestRatingString += bestRating.Released + '.'

console.log(bestRatingString)

let mostRatingString = 'Mosted rated drama is '
mostRatingString += mostRating.Title
mostRatingString += ', directed by '
mostRatingString += mostRating.Director
mostRatingString += ' and was relesed in ' 
mostRatingString += mostRating.Released + '.'

console.log(mostRatingString)

console.log('Ex 3')

function getMoviesR(Rated) {
    return movies.filter((Rate) => {
        return Rate.Rated === Rated
    })
}
const rMovies = getMoviesR('R')
//console.log('rMovies', rMovies)

const ratedRTitles = rMovies.map(movie => {
    return movie.Title
})
//console.log('ratedRTitles', ratedRTitles)

let rateString = 'Movies that are rated R are: ' 
for (let i = 0; i < ratedRTitles.length; i++) {
    const ending = i + 1 === ratedRTitles.length
    if (ending) {
        rateString += ratedRTitles[i] + '.'
    }else {
        rateString += ratedRTitles[i] + ', '
    }
}
console.log(rateString)

let actors = []
rMovies.map(movie => {
    movie.Actors.map(actor => {
        actors.push(actor)
    })
})
// console.log(actors)

let uniqueActors = [...new Set(actors)];
// console.log('uniqueActors', uniqueActors)

let actorString = 'Actors that played in those movies '
actorString += uniqueActors.join(', ') + '.'
console.log(actorString)