


import {createAsparagus} from "./seeds/asparagus.js";
import {createCorn} from "./seeds/corn.js";
import {createPotato} from "./seeds/potato.js";
import {createSoybean} from "./seeds/soybean.js";
import {createSunflower} from "./seeds/sunflower.js";
import {createWheat} from "./seeds/wheat.js";

import {addPlant, usePlants} from "./field.js";


/*Is the parameter from the createPlan() in plan.js?
That is stored in a variable in main.js called yearlyPlan*/

export const plantSeeds = (yearsPlantingPlan) => {
    for (const layout of yearsPlantingPlan) {
        for (const row of layout) {
            if (row === "Asparagus") {
                const newAsparagusSeed = createAsparagus()
                addPlant(newAsparagusSeed)
            } else if (row === "Corn") {
                const newCornSeed = createCorn()
                addPlant(newCornSeed)
            } else if (row === "Potato") {
                const newPotatoSeed = createPotato()
                addPlant(newPotatoSeed)
            } else if (row === "Soybean") {
                const newSoybeanSeed = createSoybean()
                addPlant(newSoybeanSeed)
            } else if (row === "Sunflower") {
                const newSunflowerSeed = createSunflower()
                addPlant(newSunflowerSeed)
            } else if (row === "Wheat") {
                const newWheatSeed = createWheat()
                addPlant(newWheatSeed)
            }
           

            
        }
    }
    return usePlants()
}