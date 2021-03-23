import React from "react";
import styled, { keyframes } from "styled-components";
import KswapIcon from "./KswapIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const Container = styled.div`
  position: relative;
`;

const FloatingKswapIcon = styled(KswapIcon)`
  animation: ${float} 2s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 72 }) => {
  return (
    <Container>
      <FloatingKswapIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
