const Pet = require('../vpet.js'); 


describe("virtual pet constructor", ()=>{
    it("should check if the pet constructor is defined",() => {
        expect(new Pet()).toBeDefined();
    });
    it('returns an object', () => {
        expect(new Pet()).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
        const pet = new Pet("Fido");
        expect(pet.name).toEqual("Fido");        
    });
    it('has a initial age of 0', () => {
        const pet = new Pet("Fido");
        expect(pet.age).toBe(0); 
    });   
    it('has a initial hunger of 0', () => {
        const pet = new Pet("Fido");
        expect(pet.hunger).toBe(0); 
    });
    it('has a initial fitness of 10', () => {
        const pet = new Pet("Fido");
        expect(pet.fitness).toBe(10); 
    });

});

describe("Grow up feature",()=>{
    it("increments the age by 1", ()=>{
        const pet = new Pet("Fido"); 
        pet.growUp();
        expect(pet.age).toBe(1);
    })
    it("increments the hunger by 5", ()=>{
        const pet = new Pet("Fido"); 
        pet.growUp();
        expect(pet.hunger).toBe(5);
    })
    it("decreases the fitness by 3", ()=>{
        const pet = new Pet("Fido"); 
        pet.growUp();
        expect(pet.fitness).toBe(7);
    })

});