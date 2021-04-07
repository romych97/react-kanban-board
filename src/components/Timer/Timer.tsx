
import React, { useState, useEffect } from 'react'

interface Props {
    id: any;
    setTimer: any;
}

const Timer: React.FunctionComponent<Props> = ({ id, setTimer }) => {

    const [hours, setHours] = useState(0); 
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);

    const [totalSeconds, setTotalSeconds] = useState(0);

    useEffect(() => {
        var time = setInterval(() => tick(), 1000);
        return function cleanup() {
            clearInterval(time);
        };
    });

      function tick() {
        //   time = seconds
        setTimer(id, ('0' + hours).slice(-2) + ':' + ('0' + hours).slice(-2) + ':' +  ('0' + seconds).slice(-2))
        
        if (minutes >= 60) {
            setMinutes(0);
            setHours(hours + 1)
        }
        if (seconds >= 60) {
            setSeconds(0);
            setMinutes(minutes + 1)
        } else {
            setSeconds(seconds + 1);
        }
        setTotalSeconds(totalSeconds + 1)
      }

    return (
        <div>
            { ('0' + hours).slice(-2) }:{ ('0' + minutes).slice(-2) }:{ ('0' + seconds).slice(-2) }
        </div>
    )

}

export default Timer