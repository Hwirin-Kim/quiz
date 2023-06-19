import React, { useEffect, useState } from "react";
import { useSetRecoilState } from "recoil";
import { totalTimeAtom } from "../atom/atom";

export default function useTimer() {
  const [seconds, setSeconds] = useState(0);
  const setTotalTime = useSetRecoilState(totalTimeAtom);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => {
      setTotalTime(seconds);
      clearInterval(timer);
    };
  }, [seconds]);
}
