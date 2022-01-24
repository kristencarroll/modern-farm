
//accepts harvested food array from harvestPlants function in harvester as parameter
export const Catalog = (harvestedFoodArray) => {
    for (const food of harvestedFood) {
        document.querySelector(".container").innerHTML += `<section class="${food.name}">Corn</section>`

    }

}