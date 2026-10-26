

class User {
    name;
    age;
    constructor(pName, pAge) {
        this.name = pName;
        this.age = pAge;
    }
    print () {
        console.log(`имя - ${this.name}; возраст: ${this.age};`);
    }
}
const tom = new User('tom', 14)
console.log(tom);

class Student extends User {
    username;
    #password;
    constructor(pName, pAge, pUsername, pPassword) {
        super(pName, pAge); 
        this.username = pUsername;
        this.#password = pPassword;
    }
    print (i) {
        let p = i == this.#password ? `имя - ${this.name}; возраст: ${this.age};`: `не верный пароль`;
        console.log(p);
    }
}

const Jerry = new Student('Jerry', 16, 'Jerry228', 'Jerry123')

Jerry.print()
Jerry.print('Jerry123')

