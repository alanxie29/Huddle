export default User;

const User = {
    id: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    chosenTeam: '',
    gamesPlayed: Number,
    gamesWon: Number
}

function User(id, email, firstName, lastName, password, chosenTeam, gamesPlayed, gamesWon) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName,
    this.password = password,
    this.chosenTeam = chosenTeam,
    this.gamesPlayed = gamesPlayed;
    this.gamesWon = gamesWon
}