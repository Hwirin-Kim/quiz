import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <ErrorBox>
      <Container>
        <NeonText onClick={() => navigate("/")}>404</NeonText>
        <FluxText onClick={() => navigate("/")}>PAGE NOT FOUND</FluxText>
      </Container>
    </ErrorBox>
  );
};
export default ErrorPage;

const ErrorBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000;
`;

const neonAnimation = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw #fa1c16, 0 0 3vw #fa1c16, 0 0 10vw #fa1c16,
      0 0 10vw #fa1c16, 0 0 0.4vw #fed128, 0.5vw 0.5vw 0.1vw #806914;
    color: #fed128;
  }
  50% {
    text-shadow: 0 0 0.5vw #800e0b, 0 0 1.5vw #800e0b, 0 0 5vw #800e0b,
      0 0 5vw #800e0b, 0 0 0.2vw #800e0b, 0.5vw 0.5vw 0.1vw #40340a;
    color: #806914;
  }
`;

const fluxAnimation = keyframes`
  0%,
  100% {
    text-shadow: 0 0 1vw #1041ff, 0 0 3vw #1041ff, 0 0 10vw #1041ff,
      0 0 10vw #1041ff, 0 0 0.4vw #8bfdfe, 0.5vw 0.5vw 0.1vw #147280;
    color: #28d7fe;
  }
  50% {
    text-shadow: 0 0 0.5vw #082180, 0 0 1.5vw #082180, 0 0 5vw #082180,
      0 0 5vw #082180, 0 0 0.2vw #082180, 0.5vw 0.5vw 0.1vw #0a3940;
    color: #146c80;
  }
`;

const Container = styled.div`
  display: table-cell;
  text-align: center;
  vertical-align: middle;
`;

const NeonText = styled.p`
  font-family: neon;
  color: #fb4264;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #f40a35;
  animation: ${neonAnimation} 1s ease infinite;
`;

const FluxText = styled.p`
  font-family: neon;
  color: #426dfb;
  font-size: 9vw;
  line-height: 9vw;
  text-shadow: 0 0 3vw #2356ff;
  animation: ${fluxAnimation} 2s linear infinite;
`;
