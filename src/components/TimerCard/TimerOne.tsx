
import Countdown, { type CountdownRendererFn} from "react-countdown";
import { useState } from "react";

export const TimerOne = () => {
    const [timer]= useState( Date.now() + 10000);
    const renderer: CountdownRendererFn = ({ hours, minutes, seconds, completed, api }) => {
            if (completed) {
                return <>Hi</>;
            } else {
                return ( 
                <span>{hours}:{minutes}:{seconds}</span>
                    <button style={breakBtnStyle}>
                        Reset
                    </button>
                    <button style={pausePlayStyle} onClick={api.start}>
                        <img src="./icons/play-icon.png" alt="play-icon"/>
                    </button>
                    <button style={breakBtnStyle} onClick={api.stop}>
                        Break
                    </button> )
            }
        };
  return (
  )
}

export default TimerOne