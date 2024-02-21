// code your solution here
function superbowlWin(record) {
    const result = record.find(function(game) {
        return game.result === "W";
    });
    return result ? result.year : undefined;
}


