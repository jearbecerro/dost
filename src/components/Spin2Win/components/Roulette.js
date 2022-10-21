/* eslint-disable */
import React, { useState, useEffect, useRef } from "react";
import { getRotationDegrees } from "../utils";
import { RotationContainer } from "./styles";

import useSound from 'use-sound';
import tick from '../../../assets/audio/tick2x.mp3'
import tada from '../../../assets/audio/ta-da.mp3'
import boing from '../../../assets/audio/boing.mp3'
import { isMobile } from "react-device-detect";

const STARTED_SPINNING = "started-spinning";

const START_SPINNING_TIME = 100;
const CONTINUE_SPINNING_TIME = 100;
const STOP_SPINNING_TIME = 6000;

export function Wheel ({
  mustStartSpinning,
  prizeNumber,
  onStopSpinning = () => null,
  wheel,
  pointer,
  winner,
  count,
  setcongrats
}){
  const [startRotationDegrees, setStartRotationDegrees] = useState(0);
  const [finalRotationDegrees, setFinalRotationDegrees] = useState(0);
  const [hasStartedSpinning, setHasStartedSpinning] = useState(false);
  const [hasStoppedSpinning, setHasStoppedSpinning] = useState(false);
  const [isCurrentlySpinning, setIsCurrentlySpinning] = useState(false);
  const mustStopSpinning = useRef(false);

  const [playbackRate, setPlaybackRate] = useState(1.5);
  const [volume, setVolume] = useState(1);
  const [playTick, {stop, sound}] = useSound(tick, { playbackRate, volume });
  const [playWin] = useSound(tada)
  const [playLose] = useSound(boing)
  const startSpinning = () => {
    setHasStartedSpinning(true);
    setHasStoppedSpinning(false);
    mustStopSpinning.current = true;
    playTick()
    setTimeout(() => {
      if (mustStopSpinning.current) {
        mustStopSpinning.current = false;
        setHasStartedSpinning(false);
        setHasStoppedSpinning(true);
        onStopSpinning();
        
        setPlaybackRate(1)
        setPlaybackRate(0.80)
        sound.fade(0, 1, 200);
        stop()
        setPlaybackRate(1.5)
        if(winner){
          playWin()
          setcongrats(true)
        } else {
          playLose()
        }
      }
    }, START_SPINNING_TIME + CONTINUE_SPINNING_TIME + STOP_SPINNING_TIME - 300);
  };
 
  useEffect(() => {
    if (mustStartSpinning && !isCurrentlySpinning) {
      setIsCurrentlySpinning(true);
      startSpinning();
      
      const finalRotationDegreesCalculated = getRotationDegrees(prizeNumber, count);
      setFinalRotationDegrees(finalRotationDegreesCalculated);
    }
  }, [mustStartSpinning]);

  useEffect(() => {
    if (hasStoppedSpinning) {
      setIsCurrentlySpinning(false);
      setStartRotationDegrees(finalRotationDegrees);
    }
  }, [hasStoppedSpinning]);

  const getRouletteClass = () => {
    if (hasStartedSpinning) {
      return STARTED_SPINNING;
    }
    return "";
  };

  return (
    <>
      <RotationContainer
        className={getRouletteClass()}
        startSpinningTime={START_SPINNING_TIME}
        continueSpinningTime={CONTINUE_SPINNING_TIME}
        stopSpinningTime={STOP_SPINNING_TIME}
        startRotationDegrees={startRotationDegrees}
        finalRotationDegrees={finalRotationDegrees}
      >
        
        <img
          src={wheel}
          alt="wheel"
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            margin: "0 auto",
            transform: `rotate(22.5deg)`
          }}
        />
      </RotationContainer>
      <img
        src={pointer}
        alt="marker"
        style={
          isMobile?
          {
            position: "absolute",
            width: "1.4em",
            height: "2em",
            left: "9.20em",
            top: "-1.4em",
            zIndex: 2
          }
          :
          {
            position: "absolute",
            width: "1.8em",
            height: "2.9em",
            left: "18.5em",
            top: "-1.6em",
            zIndex: 2
          }
        }
      />
    </>
  );
};
