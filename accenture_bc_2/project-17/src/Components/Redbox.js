import { useState } from "react";

function Redbox() {
  const [currentBlock, setCurrentBlock] = useState(0)

  const bg1 = currentBlock === 0 ? 'red' : 'blue'
  const bg2 = currentBlock === 1 ? 'red' : 'blue'
  const bg3 = currentBlock === 2 ? 'red' : 'blue'
  const bg4 = currentBlock === 3 ? 'red' : 'blue'

  const moveLeft = () => {
    let nextSelected = currentBlock - 1
    if (nextSelected < 0) {
      nextSelected = 0
    }
    setCurrentBlock(nextSelected)
  }

  const moveRight = () => {
    let nextSelected = currentBlock + 1
    if (nextSelected > 3) {
      nextSelected = 3
    }
    setCurrentBlock(nextSelected)
  }


  return (
    <div>
      <h1>Task 4</h1>
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: bg1, height: 100, width: 100, margin: 5 }}></div>
        <div style={{ backgroundColor: bg2, height: 100, width: 100, margin: 5 }}></div>
        <div style={{ backgroundColor: bg3, height: 100, width: 100, margin: 5 }}></div>
        <div style={{ backgroundColor: bg4, height: 100, width: 100, margin: 5 }}></div>
      </div>
      <button onClick={moveLeft}>Left</button>
      <button onClick={moveRight}>Right</button>


    </div>
  )
}

export default Redbox;