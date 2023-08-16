import { useState } from "react";

export function Counter() {
    const [name, setName] = useState("")
    const [age, setAge] = useState(0)

    function incrementAge() {
        setAge(() => {
            return age + 1
        })
    }

    function decrementAge() {
        setAge(() => {
            return age - 1
        })
    }

    return (
        <>
            <button onClick={incrementAge}>+</button>
            <h2>{age}</h2>
            <button onClick={decrementAge}>-</button>
            <br/>
            <input onChange={e => setName(e.target.value)}></input>
            <h1>My name is {name} and I am {age} years old</h1>
        </>
    )
}