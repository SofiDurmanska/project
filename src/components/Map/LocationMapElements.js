import styled from "styled-components";

export const MapContainerWrapper = styled.div`
  height: 60rem;

  @media screen and (max-width: 560px) {
    height: 50rem;
  }
`;
export const LocationMapWrapper = styled.section`
  position: relative;
`;
export const LocationMapLinkRouterWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    width: calc(100% - 4rem);
    left: 20px;
  }

  @media screen and (max-width: 560px) {
    width: 100%;
    left: 0;
  }
`;
