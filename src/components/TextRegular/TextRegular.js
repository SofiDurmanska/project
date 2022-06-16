import styled from "styled-components";

export const TextRegular = styled.p`
  font-size: 1.6rem;
  color: var(--color-dark);
  font-size: 2.2rem;
  line-height: 1.6;
  max-width: ${({ headerText }) => (headerText ? "35rem" : "")};
  margin-bottom: ${({ headerText }) => (headerText ? "7rem" : "")};
  color: ${({ darkBg }) => (darkBg ? "var(--color-light)" : "")};
  max-width: ${({ galleryText }) => (galleryText ? "32rem" : "")};

  &.footer-text-regular {
    grid-column: 4/9;
    font-size: 1.8rem;
    color: inherit;

    @media screen and (max-width: 700px) {
      grid-column: 5/10;
    }

    @media screen and (max-width: 560px) {
      grid-column: 1/2;
    }
  }

  &.location-text-regular {
    margin-bottom: 2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ headerText }) => (headerText ? "1.8rem" : "")};
    margin-bottom: ${({ headerText }) => (headerText ? "5rem" : "")};
  }

  @media screen and (max-width: 375px) {
    margin-bottom: ${({ headerText }) => (headerText ? "rem" : "")};
  }
`;
