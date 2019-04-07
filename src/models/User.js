export default User;

class User {
 constructor(id, email, firstName, lastName, password, chosenTeam, gamesPlayed, gamesWon) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName,
    this.password = password,
    this.chosenTeam = chosenTeam,
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon
    }
}