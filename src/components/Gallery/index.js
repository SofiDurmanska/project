import { Container } from "../Container/Container";
import {
  GalleryContent,
  GalleryImgBox,
  GalleryTextBox,
  GalleryWrapper,
} from "./GalleryElements";
import ImgOneDesktop from "../../assets/desktop/image-grid-1@2x.jpg";
import ImgTwoDesktop from "../../assets/desktop/image-grid-2@2x.jpg";
import ImgThreeDesktop from "../../assets/desktop/image-grid-3@2x.jpg";
import ImgOneTablet from "../../assets/tablet/image-grid-1@2x.jpg";
import ImgTwoTablet from "../../assets/tablet/image-grid-2@2x.jpg";
import ImgThreeTablet from "../../assets/tablet/image-grid-3@2x.jpg";
import ImgOneMobile from "../../assets/mobile/image-grid-1@2x.jpg";
import ImgTwoMobile from "../../assets/mobile/image-grid-2@2x.jpg";
import ImgThreeMobile from "../../assets/mobile/image-grid-3@2x.jpg";
import { TextRegular } from "../TextRegular/TextRegular";
import { HeadingSecondary } from "../HeadingSecondary/HeadingSecondary";

const Gallery = () => {
  return (
    <>
      <GalleryWrapper>
        <Container>
          <GalleryContent>
            <GalleryTextBox className="gallery-item">
              <HeadingSecondary>Hi, my name is sofie</HeadingSecondary>
              <TextRegular galleryText>
              I am a professional modern dancer with several years of experience
              </TextRegular>
            </GalleryTextBox>

            <GalleryImgBox
              ImgDesktop={ImgOneDesktop}
              ImgTablet={ImgOneTablet}
              ImgMobile={ImgOneMobile}
              className="gallery-item"
            />
            <GalleryImgBox
              ImgDesktop={ImgTwoDesktop}
              ImgTablet={ImgTwoTablet}
              ImgMobile={ImgTwoMobile}
              className="gallery-item"
            />
            <GalleryImgBox
              ImgDesktop={ImgThreeDesktop}
              ImgTablet={ImgThreeTablet}
              ImgMobile={ImgThreeMobile}
              className="gallery-item"
            />
            <GalleryTextBox darkBg className="gallery-item">
              <HeadingSecondary>How to join ?</HeadingSecondary>
              <TextRegular darkBg galleryText>
              For registration please contact me at the following email address; sofidurmanska@gmail.com
              </TextRegular>
            </GalleryTextBox>
          </GalleryContent>
        </Container>
      </GalleryWrapper>
    </>
  );
};

export default Gallery;
