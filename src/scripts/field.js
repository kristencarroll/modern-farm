const plantsInFieldArray = [ ]

export const addPlant = (seed) => {
    plantsInFieldArray.push()

    }

export const usePlants = () => {
    const plantsInFieldArrayCopy = plantsInFieldArray.map(seed => ({...seed}))

    return plantsInFieldArrayCopy
}


//export const usePlants = () => {
    //const growingInFieldCopy = growingInField.map(seed => ({...seed}))
    //return growingInFieldCopy
//}