function amIOldEnough(myAge,movieRating,parent){
    let message=null;
    let minAgeForPG13=13;
    let minAgeForR=17;
    if (!parent){
        if(movieRating === 'R' && myAge<minAgeForR) {
        message='Sorry, you are to young for this movie';}
        else if (movieRating === 'PG13' && myAge<minAgeForPG13) {
        message='Sorry, you are to young for this movie, you can buy the ticket to the movie with rating G';}
        else {message='You are welcome to watch the movie! Please buy the ticket!'};
    }
    else {message='You can visit any movie in such a company, there are your tickets!'}
    console.log(message);}
    amIOldEnough(12,'PG13',false)
    