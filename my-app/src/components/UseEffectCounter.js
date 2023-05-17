import React, { useState, useEffect } from 'react'

function UseEffectCounter() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        
        document.title = count;
    }, [count]);
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)
            }>
                Increment count({count})
            </button>
        </div>
    )
}

export default UseEffectCounter
