class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.bankamt = 0;
    }
    
    birthday() {
        this.age += 1;
        return this.age;
    }
    
    pay(amt) {
        this.bankamt += amt;
    }       
}

class Farmer extends Person {
    constructor(name, age, payrate){
        super(name, age);
        this.payrate = payrate;
        this.frequency = 12;
    }

    payMe() {
        --this.frequency;
        if (this.frequency < 1) {
            this.pay(this.payrate);
            this.resetFrequency();
        }
    }
    
    resetFrequency() {
        this.frequency = 12;
    }
    
}

class FSD extends Person {
    constructor(name, age, payrate){
        super(name, age);
        this.payrate = payrate;
    }

    payMe() {
        this.pay(this.payrate);
    }
    
}

class Clerk extends Person {
    constructor(name, age, payrate, hoursworked){
        super(name, age);
        this.payrate = payrate;
        this.hoursworked = hoursworked;
    }

    payMe() {
        this.pay(this.payrate * this.hoursworked);
    }
    
}

var people = [];
people.push(new Farmer('Larry', 25, 100000));
people.push(new Farmer('McDonald', 44, 100000));
people.push(new FSD('Eric', 49, 5000));
people.push(new Clerk('Johnny', 24, 15, 150));
people.push(new Farmer('Lorraine', 44, 120000));
people.push(new FSD('Tish', 49, 7000));

people.forEach(function(current) {
    console.log(current);
});

for (let i=1; i<= 48; i++) {
    people.forEach(function(current) {
        current.payMe();
        if (i % 12 === 0)  current.birthday();
    });
}

people.forEach(function(current) {
    console.log(current);
});
