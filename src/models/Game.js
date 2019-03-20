export default Game;

class Game {
    constructor(id, homeTeam, awayTeam, date, location, bettingOdds, inProgress) {
    this.id = id;
    this.homeTeam = homeTeam;
    this.awayTeam = awayTeam;
    this.date = date;
    this.location = location;
    this.bettingOdds = bettingOdds;
    this.inProgress = inProgress;
    }
}