const calculateSupply = (age, dailyAmount) => {
 const maxAge = 75
 const daysInYear = 365
 let yearsLeft = maxAge - age
 let supplyNeeded = yearsLeft * (dailyAmount * daysInYear)
 return `You will need ${supplyNeeded} to last you until the ripe old age of ${maxAge}`
}

export default calculateSupply;