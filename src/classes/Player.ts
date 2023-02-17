import {IsPlayer} from './../interfaces/IsPlayer.js'

export class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  play():void {
    console.log(`${this.name} is playing for ${this.country} at the age of ${this.age}`);
  }
}


