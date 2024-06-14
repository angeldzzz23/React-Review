import { useEffect } from "react";


function Timer({dispatch, secondsRemainding}) {


    const mins = Math.floor(secondsRemainding / 60);
    const seconds = secondsRemainding  % 60;

    useEffect(function(){
        const id = setInterval(() => {
            dispatch({type:"tick"});
        }, 1000);

        return () => clearInterval(id);

    }, [dispatch]);

    return (
        <div className="timer">
            {mins < 10 && "0"}
            {mins}:{seconds < 10 && "0"}
            {seconds}
        </div>
    );
}

export default Timer;