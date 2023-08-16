import { useState } from 'react'
import './App.css'
import { Counter } from './Counter'

function App() {
  const [array, setArray] = useState(["A", "B", "C"])
  const [value, setValue] = useState("")

  function removeFirstElement() {
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter) {
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    setArray(currentArray => {
      return [letter, ...currentArray]
    })
  }

  function addLetterToEnd(letter) {
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }

  function clearArray() {
      setArray([])
  }

  function resetArray() {
      setArray(["A", "B", "C"])
  }

  function updateAToH() {
    setArray(currentArray => {
      return currentArray.map(element => {
        if (element === "A") return "H"
        return element
      })
    })
  }

  function addLetterAtIndex(letter, index) {
    setArray(currentArray => {
      return[...currentArray.slice(0, index), letter, ...currentArray.slice(index)]
    })
  }
  return <div>
    <Counter/>
    <button onClick={removeFirstElement}>Remove First Element</button>
    <br/>
    <button onClick={() => removeSpecificLetter("B")}>Remove All B's</button>
    <br/>
    <button onClick={() => addLetterToStart("B")}>Add To Start</button>
    <br/>
    <button onClick={() => addLetterToEnd("Z")}>Add To End</button>
    <br/>
    <button onClick={clearArray}>Clear Array</button>
    <br/>
    <button onClick={resetArray}>Reset Array</button>
    <br/>
    <br/>
    <button onClick={updateAToH}>Update A To H</button>
    <br/>
    <br/>
    <button onClick={() => addLetterAtIndex("C", 2)}>Add C at 2</button>
    <input value={value} onChange={e => setValue(e.target.value)}/>
    <button onClick={() => addLetterToStart(value)}>Add Value To Array</button>
    {array.join(", ")}
    </div>
}

export default App
