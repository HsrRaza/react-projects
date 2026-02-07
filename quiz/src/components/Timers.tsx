/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"


function Timers({setOver}: {setOver: (over: boolean) => void}) {

    const [leftTime, setLeftTime] = useState(5)
    const [displayTime, setDisplayTime]= useState('')

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
        if(leftTime === 0){
            setOver(true)
        }
        let formated=`${(Math.floor(leftTime/60)).toString().padStart(2,"0") }:${(leftTime%60).toString().padStart(2,"0")} `
        setDisplayTime(formated)
        

    },[leftTime])


    return (
        <div className="text-4xl">
            Time left:  {displayTime}

        </div>
    )
}

export default Timers