class Person {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    showInfo() {
        console.log(this.name, this.age, this.country);
    }
}

const guy1 = new Person('Tim', 25, 'UK');
const guy2 = new Person('Tom', 15, 'USA');
guy1.showInfo();
guy2.showInfo();