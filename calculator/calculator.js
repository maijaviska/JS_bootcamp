let firstNumber = null
let secondNumer = null
let operator = null


function setValue(nr) {
    if (!firstNumber) {
        firstNumber = nr 
    } else if (firstNumber) {
        if (!operator) {
            firstNumber = firstNumber.toString() + nr.toString()
        } else {
            if (!secondNumer) { secondNumer.toString() + nr.toString()}
            else { secondNumer = secondNumer.toString() + nr.toString()}
        }
    }

}

function setOperator(op) {
    if (firstNumber && secondNumer && operator) {
        let result = doOperaton()
        firstNumber = result
        secondNumer = null
        result.value
    }
    operator = op
}