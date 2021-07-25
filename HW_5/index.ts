class setDoorCount {
    doorCount: number
  constructor(doorCount:number){
      this.doorCount =doorCount;
  }
  setDoor = (count: number = 2||4):number => this.doorCount = count;
}

class setColor extends setDoorCount {
    color: string
  constructor( color:string='white',  doorCount:number){
      super(doorCount);
      this.color =color;
  }
  setColor = (color:string):string => this.color = color;
}

class setHybridOrOil extends setColor {
    engine: string;
    power: number;
    constructor(engine:string, power: number, color:string,  doorCount:number){
        super(color, doorCount);
        this.engine = engine;
        this.power = power;
    }
    setEngine = (engineType: 'hybrid' | 'oil'): string => this.engine = engineType;                  
    setPower = (power:number): number => this.power = power;
}
class priceCalculator extends setHybridOrOil {
    price:number;
    constructor(engine:string, power: number, color:string,  doorCount:number, price:number){
        super(engine, power, color, doorCount);
        this.price = price;
        }
        priceCalculation(){
            if(this.doorCount===4){
                this.price += 500;
            }else this.price -=500;
            if(this.engine==='oil'){
                this.price += 1000;
            } else this.price -= 1000;
            if(this.color != 'white'){
                this.price += 100
            }
        return `BMW with color ${this.color}, with ${this.doorCount} doors, ${this.power} power and  ${this.engine} engine costs ${this.price}$`
        }
}

class Car extends priceCalculator{ 
    constructor(engine:string, power: number, color:string,  doorCount:number, price:number){
    super(engine, power,color, doorCount, price);
    }
  }
  let car = new Car('oil',3000,'red',4, 10000);
  console.log(car.priceCalculation());
