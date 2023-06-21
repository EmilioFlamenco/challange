import {
    createUser,
    getUser,
    getPetByStatus
} from "./services/petService.js";
import {
    USER_DATA,
    USER_NAME,
    STATUS
} from "./util/data.js";
import { formatPets } from "./util/formatUtil.js";
import { PetStore } from "./classes/petStore.js";
import fs from "fs";

await createUser(USER_DATA);
const userCreated = (await getUser(USER_NAME)).data; 

const petsByStatusSold = (await getPetByStatus(STATUS.sold)).data;
const petsByStatusFormated = formatPets(petsByStatusSold); 

const petStore = new PetStore();
petStore.setPets(petsByStatusFormated);
const petsNameCounted = petStore.getPetsCounted();

const data = {
    userCreated: userCreated,
    petsSolded: petsByStatusFormated,
    petsNameCounted: petsNameCounted
};

const jsonData = JSON.stringify(data, null, 2);
fs.writeFile("Ejercicio 3/results/results-data.json", jsonData, (error) => {
    if (error) {
        console.log("Error al guardar el archivo JSON:", error);
    } else {
        console.log("Archivo JSON guardado correctamente.");
    }
});
