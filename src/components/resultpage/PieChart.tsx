import { keyframes } from "styled-components";
import { styled } from "styled-components";

interface IPieChartProps {
  total: number;
  cnt: number;
  title: string;
  size: number;
  lineColor: string;
}

export default function PieChart({
  total,
  cnt,
  title,
  size,
  lineColor,
}: IPieChartProps) {
  const radius = 30;
  const circum = 2 * Math.PI * radius;
  const ratio = cnt / total;

  const dashOffset = circum - circum * ratio;

  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        <Text>{ratio * 100} %</Text>
        <Svg width={size} height={size} viewBox="0 0 100 100">
          <Circle
            r={radius}
            fill="transparent"
            circum={circum}
            dashOffset={dashOffset}
            lineColor={lineColor}
          />
        </Svg>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  display: inline-block;
`;

const Wrapper = styled.div`
  display: inline-block;
  position: relative;
`;

const Svg = styled.svg``;

interface ICircleProps {
  circum: number;
  dashOffset: number;
  lineColor: string;
}

const lineKeyframe = (circum: number, dashOffset: number) => keyframes`
    from {
      stroke-dashoffset: ${circum};
    }
    to {
      stroke-dashoffset: ${dashOffset};
    }
`;

const Circle = styled.circle<ICircleProps>`
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
  stroke-dasharray: ${(props) => props.circum};
  stroke-dashoffset: ${(props) => props.circum};
  fill: #e1dede;
  stroke: ${(props) => (props.lineColor === "success" ? "#5353d7" : "#d75353")};
  stroke-width: 6;
  stroke-linecap: round;
  cx: 50;
  cy: 50;
  animation: ${(props) => lineKeyframe(props.circum, props.dashOffset)} 1s
    forwards;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  color: #000000;
  font-size: 1.3rem;
  transform: translate(-50%, -50%);
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;
