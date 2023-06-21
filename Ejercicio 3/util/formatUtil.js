const formatPet = (pet) => ({
    id: pet.id,
    name: pet.name
})

export const formatPets = (pets) => (
    pets.map(pet => formatPet(pet))
);

export const countPets = (pets) => {
    let petCounted = {};
    pets.forEach(pet => {
        const name = pet.name;
        if (petCounted.hasOwnProperty(pet.name)) {
            petCounted[name]++;
        } else {
            petCounted[name] = 1;
        }
    });
    return petCounted;
};