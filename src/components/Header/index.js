import bgDesktop from "../../assets/desktop/image-hero@2x.jpg";
import bgTablet from "../../assets/tablet/image-hero@2x.jpg";
import bgMobile from "../../assets/mobile/image-hero@2x.jpg";
import { Container } from "../Container/Container";
import LinkRouter from "../LinkR";
import ArrowRight from "../../assets/icon-arrow-right.svg";

import {
  HeaderContentCols,
  HeaderCols,
  HeaderContent,
  HeaderContentColLeft,
  HeaderContentColOne,
  HeaderContentColRight,
  HeaderContentColThree,
  HeaderContentColTwo,
  HeaderHeading,
  HeaderWrapper,
} from "./HeaderElements";
import { TextRegular } from "../TextRegular/TextRegular";

const Header = () => {

  return (
    <>
      <HeaderWrapper>
        <HeaderContent style={{ mixBlendMode: "difference", zIndex: "0" }}>
          <Container>
            <HeaderHeading
              desktopDisplay
              style={{ marginTop: "17rem", color: "var(--color-light)" }}
            >
              <span style={{ display: "block" }}>Sofi's</span>
              <span style={{ display: "block" }}>Modern</span>
              <span style={{ display: "block" }}>Dance</span>
              <span style={{ display: "block" }}>School</span>
            </HeaderHeading>
          </Container>
        </HeaderContent>

        <HeaderCols
          bgDesktop={bgDesktop}
          bgTablet={bgTablet}
          bgMobile={bgMobile}
        >
          <HeaderContentColOne></HeaderContentColOne>
          <HeaderContentColTwo></HeaderContentColTwo>
          <HeaderContentColThree></HeaderContentColThree>
        </HeaderCols>
        <HeaderContent>
          <Container>
            <HeaderContentCols>
              <HeaderContentColLeft></HeaderContentColLeft>
              <HeaderContentColRight>
                <HeaderHeading tabletMobileDisplay>
                  <span style={{ display: "block" }}>Modern</span> Ballet School
                </HeaderHeading>
                <TextRegular headerText>
                Learn to dance without any dance training or previous experience
                </TextRegular>
                <LinkRouter
                  pathname="/location"
                  text="our location"
                  src={ArrowRight}
                  arrowRight
                />
              </HeaderContentColRight>
            </HeaderContentCols>
          </Container>
        </HeaderContent>
      </HeaderWrapper>
    </>
  );
};

export default Header;
