import { SpaceLocation } from "./SpaceLocation";

// Part 1: Declare (5) Variables With Type
let spacecraftName: string = "Determination";
let speedMph: number = 17500;
let kilometersToMars: number = 225000000;
let kilometersToTheMoon: number = 384400;
let milesPerKilometer: number = 0.621;

// Part 2: Print Days to Mars

let milesToMars: number = kilometersToMars * milesPerKilometer;
let hoursToMars: number = milesToMars / speedMph;
let daysToMars: number = hoursToMars / 24;

// Code an output statement here (use a template literal):

// Part 3: Create a Function ("getDaysToLocation")

// Move your output statement from part 2 here. Update the template literal to call
// the function and print the outputs for a Mars trip and a moon trip.

// Part 4: Create a Spacecraft Class

class Spacecraft {
  public milesPerKilometer: number = 0.621;
  public name: string;
  public speedMph: number;

  constructor(name: string, speedMph: number) {
    this.name = name;
    this.speedMph = speedMph;
  }

  getDaysToLocation(kilometersAway: number): number {
    const milesToLocation: number = kilometersAway * this.milesPerKilometer;
    const hoursToLocation: number = milesToLocation / this.speedMph;
    const daysToLocation: number = hoursToLocation / 24;

    return daysToLocation;
  }

  printDaysToLocation(location: SpaceLocation) {
    console.log(
      `${this.name} would take ${this.getDaysToLocation(
        location.kilometersAway
      )} days to get to ${location.name}`
    );
  }
}

// Create an instance of the class here:

let spaceShuttle = new Spacecraft("Determination", 17500);

// Move your output statements from part 3 here. Update the template literals use the
// instance of the class.

spaceShuttle.printDaysToLocation(new SpaceLocation("Mars", kilometersToMars));

spaceShuttle.printDaysToLocation(
  new SpaceLocation("the Moon", kilometersToTheMoon)
);
// Part 5: Export and Import the SpaceLocation Class
// Add the required import statement BEFORE the part 1 content.

// Add the printDaysToLocation function to the Spacecraft class.

// Use the class instance to print out the days to Mars and the Moon here:

/*
spaceShuttle.printDaysToLocation(new SpaceLocation('Mars', kilometersToMars));
spaceShuttle.printDaysToLocation(new SpaceLocation('the Moon', kilometersToTheMoon));
*/
