const movies = require('./moviedata.json')

/* EX 3
1. Rated = R
2. console.log "Movies that are rated R are: Title separated by comma."
3. Array of all actors that have made an R rated movie. Do not repeat one actor multiple times!
4. console.log "Actors that played in those movies: Actors separated by comma"
*/
function getRMovies(Rate) {
    return movies.filter((Rated) => {
        return movies.Rate == Rate
    })
}
console.log(getRMovies())

/*console.log('Movies that are rated R are: ' + Title + '.' separated by comma)
/*console.log('Actors that played in those movies: ' + Actors + '.' separated by comma" */



/* EX 1
1. Year = 1962 - 1972
2. imdbRating max and imdbVotes max
3. console.log "Best rated movie is Title, directed by Director and was released on Released."
4. console.log "Most rated movie is Title, directed by Director and was released on Released."
*/


/* EX 2
1. Genre = Drama
2. imdbRating max and imdbVotes max
3. console.log "Best rated drama is Title, directed by Director and was released on Released."
4. console.log "Most rated drama is Title, directed by Director and was released on Released."
*/
