

function Alert() {
    const createAlert = () =>{
        alert('Hello world');
    }
    const createDynamicAlert = (btnName) => {
        alert(`Hello world from ${btnName}`)
    }

    const getEventData = (event) => {
        console.log(event)
    }

    return (
        <div>
            <h1>Simple button</h1>
           <button onClick={createAlert}>Click me</button>
           <h1>Complex button</h1>
           <button onClick={() => createDynamicAlert('Btn 1')}>Btn 1</button>
           <button onClick={() => createDynamicAlert('Btn 2')}>Btn 1</button>
           <h1>Event getEventData</h1>
           <button onClick={(event) => getEventData(event)}>Get event data 1</button>
           <button onClick={getEventData}>Get event data 2</button>
        </div>
    )
}

export default Alert;