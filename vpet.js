function Pet(name) {
  this.name = name;
  this.age = 0;
  this.hunger = 0;
  this.fitness = 10;
}

Pet.prototype = {
  get isAlive() {     
    // if (this.fitness === 0) {
    //   return false;
    // } 
    // if(this.hunger >= 10){
    //     return false;
    // }
    // if(this.age >= 30){
    //     return false;
    // }
    // else {
    //     return true;
    // }
     return this.age < 30 && this.hunger < 10 && this.fitness > 0;
  },
  growUp() {
    if (!this.isAlive){
      throw new Error('Your pet is no longer alive :(')
    };
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
  },
  walk() {
    if (!this.isAlive){
      throw new Error('Your pet is no longer alive :(')
    };
    const MAXIMUM_FITNESS = 10;
    this.fitness += 4;
    if (this.fitness >= MAXIMUM_FITNESS) {
      this.fitness = MAXIMUM_FITNESS;
    }
  },
  feed() {
    if (!this.isAlive){
      throw new Error('Your pet is no longer alive :(')
    };
    this.hunger -= 3;
    if (this.hunger < 0) {
      this.hunger = 0;
    }
  },
  checkUp() {
    if (!this.isAlive){
      throw new Error('Your pet is no longer alive :(')
    };
    if (this.fitness < 3 && this.hunger >= 5) {
      return "I am hungry AND I need a walk";
    }
    if (this.fitness <= 3) {
      return "I need a walk";
    }
    if (this.hunger >= 5) {
      return "I am hungry";
    } else return "I feel great!";
  }
};

module.exports = Pet;
