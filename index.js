// Selector    // Handler
 /**$( document ).ready(function() {
    const body = $( 'body' );
    body.append('<ul class="movies"></ul>')


    
    const listOfMovies = ['the lighthouse', 'the dark knight', 'a clockwork Orange', "love don't cost anything", 'elysium'];

    const movies = $( '.movies' );

    listOfMovies.forEach( (movie) => {
        movies.append(`<li class="movie">${movie}</li>`);
    });**/



    const playerlist = $( `.player-list`);

    let players = [
        {
            username: `Azragame1`,
            score: 9001,
            pic: `https://loremflickr.com/200/200/dog`
        },

            username: `Andrew`,
            score: 300,
            pic: `https://loremflickr.com/200/200/panda`
        },

            username: `Fifi`,
            score: 10,
            pic: `https://loremflickr.com/200/200/fox`
        },

            username: `Azragame1`,
            score: 9001
            pic: `https://loremflickr.com/200/200/cat`
        },
    ];
    
    players.forEach(player) => {
        const{ username, score, pic } = player;
        playerlist.append (`
             <li class="player" id= "${username}">
              <img src="${pic}" style="border-radius: 100%; "> <span>Name: ${username}</span><span>Score: ${score}</span>
              </li>
              
        `)
    };


    const playercard = $(`.player`).children(`img`);

    playercard.on(`click`, function() {
        let parentId = $(this).parent('li');

        console.log(parentId);
    });

    playercard.on({
        mouseenter: function(event){
            console.log(event);
        },
        mouseleave: function(event){
            console.log(event);
        },
    });

});