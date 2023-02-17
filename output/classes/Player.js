export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    play() {
        console.log(`${this.name} is playing for ${this.country} at the age of ${this.age}`);
    }
}
