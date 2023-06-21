import { countPets } from "../util/formatUtil.js";

export class PetStore {
    constructor() {
        this.pets = {};
    }

    setPets(pets) {
        this.pets = pets;
    }

    getPetsCounted() {
        return countPets(this.pets);
    }

    getPets() {
        return this.pets;
    }
};