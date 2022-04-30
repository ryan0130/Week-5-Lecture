class Player {
    constructor(name, position) {
        this.name = name;
        this.position = position;
    }

    describe() {
        return `${this.name} plays ${this.position}.`;
    }
}

class Team {
    constructor(name) {
        this.name = name;
        this.players = [];
    }

    addPlayer(player) {
        if (player instanceof Player) {
            this.players.push(player);
        } else {
            throw new Error(`You can only add an instance of Player. Argument is not a player: ${player}`);
        }
    }

    describe() {
        return `${this.name} has ${this.players.length} players.`;
    }
}

class Menu {
    constructor() {
        this.teams = [];
        this.selectedTeam = null;
    }

    start() {
        let selection = this.showMainMenuOptions();

        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createTeam();
                    break;
                case '2':
                    this.viewTeam();
                    break;
                case '3':
                    this.deleteTeam();
                    break;
                case '4':
                    this.displayTeams();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

     showMainMenuOptions() {
         return prompt(`
            0) exit
            1) create new team
            2) view team
            3) delete team
            4) display all teams
         `);
     }

     showTeamMenuOptions(teamInfo) {
         return prompt(`
            0) back
            1) create player
            2) delete player
            ---------------------
            ${teamInfo}
         `);
     }

     displayTeams() {
        let teamString = '';
        for (let i = 0; i < this.teams.length; i++) {
            teamString += i + ') ' + this.teams[i].name + '\n';
        }
        alert(teamString);
     }

     createTeam() {
         let name = prompt('Enter name for new team:');
         this.teams.push(new Team(name));
     }

     viewTeam() {
         let index = prompt('Enter the index of the team you wish to view:');
         if (index > -1 && index < this.teams.length) {     //validate input
            this.selectedTeam = this.teams[index];
            let description = 'Team Name: ' + this.selectedTeam.name + '\n';

            for (let i = 0; i < this.selectedTeam.players.length; i++) {
                description += i + ') ' + this.selectedTeam.players[i].name 
                + ' - ' + this.selectedTeam.players[i].position + '\n';           
            }

            let selection = this.showTeamMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createPlayer();
                    break;
                case '2':
                    this.deletePlayer();
            }
         }
     }

     deleteTeam() {
         let index = prompt('Enter the index of the team you wish to delete:');
         if (index > -1 && index < this.teams.length) {
             this.teams.splice(index, 1);
         }
     }

     createPlayer() {
         let name = prompt('Enter name for new player:');
         let position = prompt('Enter position for new player:');
         this.selectedTeam.players.push(new Player(name, position));
     }

     deletePlayer() {
         let index = prompt('Enter the index of the player you wish to delete:');
         if (index > -1 && index < this.selectedTeam.players.length) {
             this.selectedTeam.players.splice(index, 1);
         }
     }
}

let menu = new Menu();
menu.start();

//-------------------------------------------------------------------
// try {
//     list.push('hello');
// } catch (err) {
//     console.log(err);
// }
// console.log('goodbye');
//-------------------------------------------------------------------
// class NotificationSender {
//     constructor(status) {
//         this.status = status;
//     }
//     sendNotification(notification){
//         console.log('Sending: ' + notification);
//     }

//     findUsersWithStatus(status) {
//         let users = getUsers(status);
//         return users;
//     }
// }

// class PromotionSender extends NotificationSender {
//     constructor(status) {
//         super(status);
//     }

//     calculateDiscount(status) {
//         if (status === 'GOLD') {
//             return .3;
//         } else if (status === 'SILVER') {
//             return .15;
//         }
//         return 0;
//     }
// }

// class CollectionSender extends NotificationSender {
//     constructor(status) {
//         super(status);
//     }

//     calculateFee(status) {
//         if (status === 'OVERDUE') {
//             return 10;
//         } else if (status === 'DELINQUENT') {
//             return 25;
//         }
//         return 5;
//     }
// }

// let collectionSender = new CollectionSender('OVERDUE');
// collectionSender.sendNotification('this is a test collections notification.');

//-------------------------------------------------------------------

// class Student {
//     constructor(firstName, lastName, phoneNumber, grade) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.phoneNumber = phoneNumber;
//         this.grade = grade;
//     }

//     introduce() {
//         console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
//     }
// }
// let student = new Student();
// student.firstName = 'Tommy';
// student.lastName = 'Smith';

// let student1 = new Student('Tom', 'Sawyer', '6235555555', 'A');
// let student2 = new Student('Sam', 'Smith', '4855555555', 'A');

// student1.introduce();
// student2.introduce();