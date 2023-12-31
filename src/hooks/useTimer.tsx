import React, { useEffect, useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import { totalTimeAtom } from "../atom/atom";

export default function useTimer(end: boolean) {
  const [seconds, setSeconds] = useState(0);
  const secondsRef = useRef(seconds);
  const setTotalTime = useSetRecoilState(totalTimeAtom);

  useEffect(() => {
    secondsRef.current = seconds;
  }, [seconds]);

  useEffect(() => {
    if (end) {
      setTotalTime(secondsRef.current);
    }
  }, [end]);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [setTotalTime]);
}
