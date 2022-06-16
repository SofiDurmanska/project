import styled from "styled-components";

export const HeaderWrapper = styled.header`
  position: relative;
  color: var(--color-light);
  background-color: #000;
  margin-bottom: 18rem;

  @media screen and (max-width: 768px) {
    background-color: var(--color-light);
    margin-bottom: 12rem;
  }
`;

export const HeaderCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 540px 1fr;
  height: 100%;
  background: var(--color-white);
  background-image: ${(props) =>
    props.bgDesktop ? `url(${props.bgDesktop})` : "black"};
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  min-height: 80rem;
  mix-blend-mode: difference;

  @media screen and (max-width: 768px) {
    background: var(--color-white);
    background-image: ${(props) =>
      props.bgTablet ? `url(${props.bgTablet})` : ""};
    background-repeat: no-repeat;
    background-position: left;
    background-size: contain;
    min-height: 70rem;
    mix-blend-mode: unset;
    display: block;
  }

  @media screen and (max-width: 650px) {
    background-position: center;
    background-size: cover;
  }

  @media screen and (max-width: 375px) {
    background-image: ${(props) =>
      props.bgMobile ? `url(${props.bgMobile})` : ""};
    min-height: 24rem;
  }
`;

export const HeaderContentColOne = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--color-dark);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderContentColTwo = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderContentColThree = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const HeaderContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;

  @media screen and (max-width: 650px) {
    position: initial;
  }
`;

export const HeaderHeading = styled.h1`
  color: var(--color-dark);
  font-size: 10.4rem;
  font-weight: 800;
  text-transform: uppercase;
  line-height: 1;
  font-family: var(--font-heading);
  display: ${({ tabletMobileDisplay }) => (tabletMobileDisplay ? "none" : "")};

  @media screen and (max-width: 900px) {
    font-size: 8rem;
  }
  @media screen and (max-width: 768px) {
    display: ${({ desktopDisplay }) => (desktopDisplay ? "none" : "")};
    display: ${({ tabletMobileDisplay }) =>
      tabletMobileDisplay ? "block" : ""};
    margin-bottom: 5rem;
  }

  @media screen and (max-width: 745px) {
    font-size: 6rem;
  }
  @media screen and (max-width: 375px) {
    font-size: 4rem;
  }
`;
export const HeaderContentCols = styled.div`
  margin-top: 17rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    margin-top: 14rem;
  }

  @media screen and (max-width: 650px) {
    margin-top: 4rem;
    display: block;
  }
`;

export const HeaderContentColLeft = styled.div`
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const HeaderContentColRight = styled.div`
  margin-left: auto;

  @media screen and (max-width: 768px) {
    margin-left: unset;
  }
`;
