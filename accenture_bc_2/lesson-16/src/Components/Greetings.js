import "./Greetings.css"

function Greeting(props) {
    const name = props.name;

    return (
        <div style={{marginTop: '10px'}}>
            Hello, <strong className="greeting-name">{name}</strong>
        </div>
    )
}

export default Greeting;