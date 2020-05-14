// Given a number of rounds n, provide the possible combinations that a player could play with Rock, Paper, and Scissors.

var RPS = function (rounds) {
    const options = ['R', 'P', 'S']
    let combos = [];
    var playRound = function (currentCombo, roundsPlayed) { // for each round:
        if (roundsPlayed === rounds) { // if we've played the total number of rounds, add this combo to combos array
            combos.push(currentCombo);
            return;
        } else {
            for (var i = 0; i < options.length; i++) { // otherwise play this round for each possibility of Rock, Paper, Scissors
                playRound(currentCombo + options[i], roundsPlayed + 1)
            }
        }
    }
    playRound('', 0)
    return combos

}