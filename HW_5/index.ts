abstract class Car {
    abstract engine:string
    abstract power: number
    abstract color:string
    abstract door:number
    abstract price:number;
    getDescription = ():string=> `Engine:${this.engine}, Power:${this.power}, Color:${this.color}, ${this.door} doors costs ${this.price}}` ;  

}
class BMW extends Car{
    engine = "oil";
    power = 360;
    door = 4;
    color = 'red';
    price = 10000
}
class setDoorColor extends BMW{
    decoratedCar: Car;
    door:number;
    color:string;
    constructor(car:Car, door:number, color:string) {
        super()
        this.decoratedCar = car,
        this.door=door;
        this.color=color;
    } 
    priceCalculation=(): number=> this.decoratedCar.price + 200;
    description=(): string=> `${this.decoratedCar.getDescription()}`
}

class setEngine extends BMW{
    decoratedCar: Car;
    engine:string;
    constructor(car:Car, engine:string) {
        super()
        this.decoratedCar = car;
        this.engine=engine;
    }
    priceCalculation=(): number=> this.decoratedCar.price + 3000;
    description=(): string=> `${this.decoratedCar.getDescription()}`
}


let bmw = new BMW();
console.log(bmw.getDescription());
//bmw = new setDoorColor(bmw, 5, 'blue');
//bmw = new setEngine(bmw,'vsxcs');
//console.log(bmw.getDescription());



