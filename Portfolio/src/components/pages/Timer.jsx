import React, {useState, useEffect} from 'react';

function Timer() {
    const [time, setTime] = useState(0);
    const [tracking, setTracking] = useState(false);

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const startStop = (running) => {
        setTracking(running);
    }

    

    useEffect(() => {
        const customInterval = setInterval(() => {
            if(tracking)setTime((prev) => prev+1000)
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }, 1000)
        return () => clearInterval(customInterval)
    }, [time, tracking]);
    return (
    <div>
        <h2>{hours}:{minutes}:{seconds}</h2>
        <button onClick={() => startStop(true)}>Start</button>
        <button onClick={() => startStop(false)}>Stop</button>
    </div>
    )
}

export default Timer
