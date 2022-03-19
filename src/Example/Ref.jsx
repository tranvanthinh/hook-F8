import { useState, useEffect, useRef } from 'react'

const Ref = () => {

    const [count, setCount] = useState(10)

    const timerId = useRef()
    const prevCount = useRef()
    const h1Ref = useRef()

    useEffect(() => {
        prevCount.current = count
    }, [count])
    useEffect(() => {
        h1Ref.current.getBoundingClientRect()
    })

    const handleStart = () => {
        if (timerId.current === undefined) {
            timerId.current = setInterval(() => {
                setCount(prevCount => prevCount - 1)
            }, 1000)
        }
    }
    const handleStop = () => {
        clearInterval(timerId.current)
        timerId.current = undefined
    }
    return (
        <div>
            <h1 ref={h1Ref}>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}

export default Ref