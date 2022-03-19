import { useState, useEffect } from 'react'

const Timer = () => {

    const [countdown, setCountdown] = useState(1000)

    useEffect(() => {
        const TimerId = setInterval(() => {
            if (countdown === 0) {
                return
            }
            setCountdown(prevState => prevState - 1)
        }, 1000)

        // Cleanup function
        return () => clearInterval(TimerId)
    }, [countdown])
    return (
        <div>
            <h1>{countdown}</h1>
        </div>
    )
}

export default Timer