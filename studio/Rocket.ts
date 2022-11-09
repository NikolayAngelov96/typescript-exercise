import { Cargo } from "./Cargo";
import { Astronaut } from "./Astronaut";
import { Payload } from "./Payload";

export class Rocket {
  name: string;
  totalCapacityKg: number;
  cargoItems: Cargo[];
  astronauts: Astronaut[];

  constructor(name: string, totalCapacityKg: number) {
    this.name = name;
    this.totalCapacityKg = totalCapacityKg;
    this.cargoItems = [];
    this.astronauts = [];
  }

  sumMass(items: Payload[]): number {
    return items.reduce((a, c) => a + c.massKg, 0);
  }

  currentMassKg(): number {
    let astronautMass = this.sumMass(this.astronauts);

    let cargoMass = this.sumMass(this.cargoItems);

    return astronautMass + cargoMass;
  }

  canAdd(item: Payload): boolean {
    return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
  }

  addCargo(cargo: Cargo): boolean {
    if (this.canAdd(cargo)) {
      this.cargoItems.push(cargo);
      return true;
    } else {
      return false;
    }
  }

  addAstronaut(astronaut: Astronaut): boolean {
    if (this.canAdd(astronaut)) {
      this.astronauts.push(astronaut);
      return true;
    } else {
      return false;
    }
  }
}
