
const plantsInFieldArray = [ ]

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const corn of seed) {
            plantsInFieldArray.push(corn)

        }
    } else {
        plantsInFieldArray.push(seed) 
    }
}

export const usePlants = () => {
    const plantsInFieldArrayCopy = plantsInFieldArray.map(seed => ({...seed}))

    return plantsInFieldArrayCopy
}


//export const usePlants = () => {
    //const growingInFieldCopy = growingInField.map(seed => ({...seed}))
    //return growingInFieldCopy
//}