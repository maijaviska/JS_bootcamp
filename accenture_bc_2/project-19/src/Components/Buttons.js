import { useState } from "react"

function Buttons() {
    const [activeBtn, setActiveBtn] = useState(-1)


    const buttons = ['Btn 1', 'Btn 2', 'Btn 3', 'Btn 4', 'Btn 5']

    const buttonList = buttons.map((buttonName, index) => {
        let btnClasses = "btn mx-1" 
        if (activeBtn === index) {
            btnClasses +=  " btn-danger"
        } else {
            btnClasses +=  " btn-primary"
        } 


        return (
            <button 
            className = {btnClasses} 
            key={index} 
            onClick={() => setActiveBtn(index)}

            >
                {buttonName}
            </button>

        )
    })

    return(
        <div>
            {buttonList}
            <h2>{activeBtn}</h2>
        </div>
    )
}

export default Buttons