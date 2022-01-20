console.log("Welcome to the main module")
import {createPlan} from "./plan.js";

let yearlyPlan = createPlan()
console.log(yearlyPlan)


const asparagusObject = {
    type: "Asparagus",
    height: 24,
    output: 4
}

import {addPlant} from "./field.js"

import {usePlants} from "./field.js"

let asparagusSeed = addPlant(asparagusObject)

let addedPlantSeed = usePlants()

console.log(addedPlantSeed)