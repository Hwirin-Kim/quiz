import React from "react";
import useTimer from "../../hooks/useTimer";

const Timer = ({ end }: { end: boolean }) => {
  const timer = useTimer(end);
  return null;
};
export default React.memo(Timer);
