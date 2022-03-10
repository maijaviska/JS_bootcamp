import isEven from "../Helpers/isEven";
import "./Wordcount.css"

function Wordcount(props) {
    const wordX = props.wordX;

    let wordLength = wordX.length;
    
    if (isEven(wordLength)) {
        return(<div style={{marginTop: '5px'}}>
            <strong className="background-red">{wordX} - {wordLength}</strong>
        </div>
        )

    } else {
        return(<div style={{marginTop: '5px'}}>
            <strong className="background-green">{wordX} - {wordLength}</strong>
        </div>
        )
    }


}

export default Wordcount;