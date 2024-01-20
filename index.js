class Vehicle {
    constructor(make, model, year) {
        this.make = make,
        this.model= model,
        this.year = year
    }

    honk() {
        return "beep."
    }

    toString(){
        return `The vehicle is a ${this.make} ${this.model} from ${this.this.year}.`
    }
}

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4
    }
}