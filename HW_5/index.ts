abstract class Car {
    abstract engine:string
    abstract power: number
    abstract color:string
    abstract door:number
    abstract price:number;
    getDescription = ()=> {
        if(typeof this.color !== undefined || typeof this.door !== undefined ) this.price += 2000; 
        if(this.engine == 'oil') this.price += 3000;
        else if (this.engine == 'hybrid') this.price += 1000;
        return`Engine:${this.engine}, Power:${this.power}, Color:${this.color},
          ${this.door} doors costs ${this.price}`;  
    }
}
class BMW extends Car{
    engine = "oil";
    power = 360;
    door = 4;
    color = 'red';
    price = 10000
}
class setDoorAndColor extends BMW{
    decoratedCar: Car;
    door:number;
    color:string;
    constructor(car:Car, door:number, color:string) {
        super();
        this.decoratedCar = car;
        this.door=door;
        this.color=color;
    } 
    description=() => {
        `${this.decoratedCar.getDescription()}`
    }
}
class setEngine extends BMW{
    decoratedCar: Car;
    engine:string;
    constructor(car:Car, engine:string) {
        super()
        this.decoratedCar = car;
        this.engine=engine;
    }
    description=()=>{
        `${this.decoratedCar.getDescription()}`
    }}


let bmw = new BMW();
console.log(bmw.getDescription());
bmw = new setDoorAndColor(bmw, 2, 'blue');
console.log(bmw.getDescription());
bmw = new setEngine(bmw,'hybrid');
console.log(bmw.getDescription());



