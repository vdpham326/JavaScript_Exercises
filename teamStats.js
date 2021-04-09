const team = {
    _players: [
      {
        firsName: "Pete",
        lastName: "Wheeler",
        age: 54
      },
      {
        firstName: "Pablo",
        lastName: "Sanchez",
        age: 11
      },
      {
        firstName: "Homer",
        lastName: "Simpson",
        age: 45
      }
    ],
    _games: [
      {
        opponent: "Broncos",
        teamPoints: 42,
        opponentPoints: 27
      }, 
      {
        opponent: "Giants",
        teamPoints: 28,
        opponentPoints: 34
      },
      {
        opponent: "Warriors",
        teamPoints: 35,
        opponentPoints: 15
      }
    ],
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    }, 
    addGame(opponent, teamPoints, opponentPoints) {
      const game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  team.addGame("Titans", 100, 98);
  team.addGame("Sharks", 87, 93);
  team.addGame("Niners", 46, 67);
  console.log(team.players);
  console.log(team.games);
  
  