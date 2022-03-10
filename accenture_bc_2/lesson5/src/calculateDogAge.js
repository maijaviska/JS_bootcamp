const calculateDogAge = (puppyAge) => {
    const dogYears = 7
    return puppyAge * dogYears;
}

const calculateHumanInDogAge = (humanAge) => {
    const dogYears = 7
    return Math.round(humanAge/dogYears)
}

export {
    calculateDogAge,
    calculateHumanInDogAge
}