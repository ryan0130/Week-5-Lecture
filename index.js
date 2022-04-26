try {
    list.push('hello');
} catch (err) {
    console.log(err);
}
console.log('goodbye');

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