import React, { useState } from 'react'
import useTitle from '../../customHooks/useTitle'

export default function ReactCounter() {
    const [counterTitle, setTitleCounter] = useState(0)
    const style = {
        margin: 10,
    }
    useTitle(counterTitle)
    return (
        <div style={style}>
            <br />
            <h1>Custom hooks</h1>
            <button onClick={() => setTitleCounter(counterTitle + 1)}>
                Click title counter
            </button>
        </div>
    )
}
