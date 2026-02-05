/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"


function Timers() {

    // const [leftTime, setLeftTime] = useState(80)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setLeftTime((prev) => {
                if (prev <= 0) {
                    clearInterval(intervalId);
                    return 0
                }
                return prev - 1
            },)
        }, 1000)

        return ()=>{
            clearInterval(intervalId)
        }

    }, [])

    useEffect( ()=>{
        console.log(`${(Math.floor(leftTime/60)).toString().padStart(2,"0") }:${(leftTime%60).toString().padStart(2,"0")} `);
        

    },[leftTime])


    return (
        <div className="text-4xl">
            Time left:  {leftTime}

        </div>
    )
}

export default Timers