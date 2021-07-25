abstract class Decorators{
    abstract engine: string;
    abstract power: number;
    abstract door: number;
    abstract color: string;
    abstract price :number;
    abstract setColor(color: string): string;
    abstract setDoor(count: number): number;
    abstract setEngine(engineType: string): string;
    abstract setPower(power: number): number;
   }
class Car extends Decorators{
    engine='oil';
    power= 3500;
    door=4;
    color ='white';
    price=10200;
      setColor = (color:string):string => this.color = color;
      setEngine = (engineType: 'hybrid' | 'oil'): string => this.engine = engineType;                  
      setDoor = (count: number = 2||4):number => this.door = count;
      setPower = (power:number): number => this.power = power;
      priceCalculation(){
        if(this.door===4){
            this.price += 500;
        }else this.price -=500;
        if(this.engine==='oil'){
            this.price += 1000;
        } else this.price -= 1000;
        if(typeof this.color != 'undefined'){
            this.price += 100
        }
    return `BMW with color ${this.color}, with ${this.door} doors, ${this.power} power and  ${this.engine} engine costs ${this.price}$`
    }
}
const BMW = new Car()
console.log(BMW.priceCalculation())