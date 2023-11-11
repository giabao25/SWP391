import React, { useEffect, useState } from 'react'
import './clock.css'
const Timer = ({ duration, callback }) => {
    const [time, setTime] = useState(duration)
    useEffect(() => {
        if (time > 0) {
            const customInterval = setInterval(() => {
                setTime((prev) => prev - 1000);
            }, 1000);

            return () => clearInterval(customInterval);
        } else {
            setTime(0); // Set time to 0 when it reaches 0
            callback(); // Call the callback when time reaches 0
        }
    }, [time])

    const formattedTime = (milliseconds) => {
        let total_seconds = parseInt(Math.floor(milliseconds / 1000))
        let total_minutes = parseInt(Math.floor(total_seconds / 60))

        let seconds = parseInt(total_seconds % 60)
        let minutes = parseInt(total_minutes % 60)

        return `${minutes}:${seconds}`
    }
    return <div className='clock-time'>
        <div>Time remaining</div>
        <div className='timer'>{formattedTime(time)}</div>
    </div>
}

export default Timer