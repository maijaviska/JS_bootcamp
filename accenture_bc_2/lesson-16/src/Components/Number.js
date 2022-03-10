import isEven from "../Helpers/isEven";

function Number(props) {
    const number = props.number;

    let numberType = null;
    if (isEven(number)) {
        numberType = <strong>even</strong>
    } else {
        numberType = <strong>odd</strong>
    }

    return (
        <div>
            <em>{number}</em> - is a {numberType} number
        </div>
    )
}

export default Number;