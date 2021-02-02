const Pet = require("../vpet.js");

let pet;
beforeEach(() => {
  pet = new Pet("Fido");
});

describe("virtual pet constructor", () => {
  it("should check if the pet constructor is defined", () => {
    expect(pet).toBeDefined();
  });
  it("returns an object", () => {
    expect(pet).toBeInstanceOf(Object);
  });
  it("sets the name property", () => {
    expect(pet.name).toEqual("Fido");
  });
  it("has a initial age of 0", () => {
    expect(pet.age).toBe(0);
  });
  it("has a initial hunger of 0", () => {
    expect(pet.hunger).toBe(0);
  });
  it("has a initial fitness of 10", () => {
    expect(pet.fitness).toBe(10);
  });
});

describe("Grow up feature", () => {
  beforeEach(() => {
    pet.growUp();
  });

  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.growUp()).toThrow("Your pet is no longer alive :(");
  });

  it("increments the age by 1", () => {
    expect(pet.age).toBe(1);
  });
  it("increments the hunger by 5", () => {
    expect(pet.hunger).toBe(5);
  });
  it("decreases the fitness by 3", () => {
    expect(pet.fitness).toBe(7);
  });
});

describe("Keeping fit feature", () => {
  it("throws an error if the pet is not alive", () => {
    pet.age = 31;
    expect(() => pet.walk()).toThrow("Your pet is no longer alive :(");
  });

  it("increments the fitness by 4", () => {
    pet.fitness = 1;
    pet.walk();
    expect(pet.fitness).toBe(5);
  });
  it("increments the fitness to a maximum value of 10", () => {
    pet.fitness = 7;
    pet.walk();
    expect(pet.fitness).toBe(10);
  });
});

describe("Keeping fed feature", () => {
  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.feed()).toThrow("Your pet is no longer alive :(");
  });
  it("decreases hunger level by 3", () => {
    pet.hunger = 5;
    pet.feed();
    expect(pet.hunger).toBe(2);
  });
  it("hunger level doesnt go below 0", () => {
    pet.hunger = 2;
    pet.feed();
    expect(pet.hunger).toBe(0);
  });
});
describe("Check up", () => {
  it("throws an error if the pet is not alive", () => {
    pet.age = 30;
    expect(() => pet.checkUp()).toThrow("Your pet is no longer alive :(");
  });
  it("checks both pet's fitness & hunger", () => {
    pet.fitness = 2;
    pet.hunger = 7;
    expect(pet.checkUp()).toBe("I am hungry AND I need a walk");
  });
  it("checks pet's fitness", () => {
    pet.fitness = 2;
    pet.hunger = 3;
    expect(pet.checkUp()).toBe("I need a walk");
  });
  it("checks pet's hunger", () => {
    pet.fitness = 4;
    pet.hunger = 6;
    expect(pet.checkUp()).toBe("I am hungry");
  });

  it("checks if nothing else is needed", () => {
    pet.fitness = 4;
    pet.hunger = 4;
    expect(pet.checkUp()).toBe("I feel great!");
  });
});

describe("Is alive?", () => {
  it("checks if the pet is alive when its fitness is 0", () => {
    pet.fitness = 0;
    expect(pet.isAlive).toBe(false);
  });
  it("checks if the pet is alive when its hunger is 10 or above", () => {
    pet.fitness = 3;
    pet.hunger = 10;
    expect(pet.isAlive).toBe(false);
    pet.hunger = 11;
    expect(pet.isAlive).toBe(false);
  });
  it("checks if the pet is alive when it is 30 years old or above", () => {
    pet.hunger = 8;
    pet.age = 30;
    expect(pet.isAlive).toBe(false);
    pet.hunger = 31;
    expect(pet.isAlive).toBe(false);
  });
  it("checks if the pet is alive", () => {
    pet.age = 10;
    expect(pet.isAlive).toBe(true);
  });
});
