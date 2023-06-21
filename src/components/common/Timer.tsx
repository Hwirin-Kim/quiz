import React from "react";
import useTimer from "../../hooks/useTimer";

const Timer = () => {
  const timer = useTimer();
  return null;
};

export default React.memo(Timer);
