console.log("Welcome to the main module")

//Testing from Chapter 1: Harvest Plan
import {createPlan} from "./plan.js";

let yearlyPlan = createPlan()
//console.log(yearlyPlan)


//Testing from Chapter 2: Creating Seeds
import {createCorn} from "./seeds/corn.js";

const cornSeed = createCorn()
//console.log(cornSeed)




//Testing from Chapter 3: Tilling the Field 
const asparagusObject = {
    type: "Asparagus",
    height: 24,
    output: 4
}

import {addPlant} from "./field.js";
import {usePlants} from "./field.js";

let asparagusSeed = addPlant(asparagusObject)
let addedPlantSeed = usePlants()
//console.log(addedPlantSeed)


//Testing from Chapter 4: Sowing the Field 
import {plantSeeds} from "./tractor.js";

let plantedSeeds = plantSeeds(yearlyPlan)
//console.log(plantedSeeds)

//Testing from Chapter 5: Harvest Time
import {harvestPlants} from "./harvester.js";

let newPlantsArray = usePlants()
let harvestedPlants = harvestPlants(newPlantsArray)
//console.log(harvestedPlants)

//Testing Chapter 6: Selling the Harvest

import {Catalog} from "./catalog.js";