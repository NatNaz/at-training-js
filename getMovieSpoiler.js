function getMovieSpoiler (movieTitle) {
    const movieTitles = [
    'Annie',
    'Shrek',
    'Toy story',
    'Star Wars',
    'Frozen',
    'Hamlet',
    'Cinderella'
    ]
const movieEndings = [
    'Mr. Warbucks adopts Annie',
    'Fiona stays an ogre.',
    'Buzz accepts that he\'s a toy',
    'The Death Star is destroyed.',
    'Elsa stops ruining everything.',
    'Everybody dies.',
    'They all live happily ever after.'
    ];
    for (let i = 0; i < movieTitles.length; i++) {
    if (movieTitle === movieTitles[i]) {
    console.log(movieTitle + ' ends with ' + movieEndings[i]);
    return movieTitles[i];
    }
    }
    
        return 'Sorry, we don\'t have that movie on our list'
}
undefined
function aLotOfSpoilers (chosenMovieTitles) {
    console.log ('CAREFULLY SPOILERS!!! these movies end with:');
    for (let i = 0; i < chosenMovieTitles.length; i++) {
        const title = chosenMovieTitles[i];
        console.log( title + ': ' + getMovieSpoiler(title));
    }

}
getMovieSpoiler('Hamlet'); // Oh, how sad. :-(
getMovieSpoiler('Cinderella'); // Hooray! :-)

aLotOfSpoilers(['Toy Story', 'Frozen', 'Hotel Rwanda', 'Annie']);
aLotOfSpoilers(['Star Wars', 'Shrek', 'Boring Talking Movie for Grown-Ups']);
