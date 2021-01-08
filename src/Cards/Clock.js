import React, {useRef, useState} from 'react';


const Clock = () => {
    const [timerDays, setTimerDays] = userState('00')

    let interval = useRef();

    const startTimer = () => {
        const countDownDate = new Date("May 30, 2021 00:00:00:00").getTime()

        interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDownDate - now

            const seconds = Math.floor(distance % (1000 * 60 * 60 * 24))

        }, 1000)
    }

    useEffect(() => {
        startTimer()
    })

    return (
        <div>
            useEffect()
        </div>
    )


}