// 5/11/21
// Time O(n) | Space O(k) - n is # of competitions, k is # of unique teams
function tournamentWinner(competitions, results) {
    var scoreboard = {};
    for (var i=0; i < competitions.length; ++i) {
        if (results[i] === 0){
            updateTeamPoints(scoreboard, competitions[i][1]);
        } else {
            updateTeamPoints(scoreboard, competitions[i][0]);
        }
    }
    return findWinner(scoreboard);
}

function updateTeamPoints(scoreboard, teamName){
    if (teamName in scoreboard) {
        scoreboard[teamName] = scoreboard[teamName] + 3;
    } else {
        scoreboard[teamName] = 3;
    }
}

function findWinner(scoreboard) {
    var winner = '';
    var max = 0;
    for (const key in scoreboard) {
        if (scoreboard[key] > max) {
            winner = key;
            max = scoreboard[key];
        }
    }
    return winner;
}

// competitions = [
//     ["HTML", "C#"],
//     ["C#", "Python"],
//     ["Python", "HTML"],
//   ];
// results = [0,0,1];

competitions= [
    ["HTML", "Java"],
    ["Java", "Python"],
    ["Python", "HTML"]
  ];
  results= [0, 1, 1];
tournamentWinner(competitions, results);