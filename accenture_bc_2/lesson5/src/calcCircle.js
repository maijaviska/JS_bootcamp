const calcCircumfrence = (radius) => {
 let circumfrence = 2 * Math.PI * radius
 return `The circumference is ${circumfrence}`
}

const calcArea = (radius) => {
 let circleArea = Math.PI * (radius ** 2)
 return `The area is ${circleArea}`
}

export {
    calcCircumfrence,
    calcArea
}