import { Link } from "react-router-dom";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: ${({ darkBg }) =>
    darkBg ? "var(--color-dark)" : "var(--color-accent)"};
  color: ${({ darkBg }) =>
    darkBg ? "var(--color-light)" : "var(--color-dark)"};
`;

export const FooterCols = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 7rem 0;

  @media screen and (max-width: 768px) {
    padding: 7rem 2rem;
  }

  @media screen and (max-width: 560px) {
    padding: 4rem 0;
    grid-template-columns: 1fr;
    row-gap: 40px;
  }
`;

export const FooterSocialLinksList = styled.ul`
  grid-column: 11/13;
  list-style: none;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 768px) {
    grid-column: 10/13;
  }

  @media screen and (max-width: 560px) {
    grid-column: 1/2;
    justify-content: flex-start;
  }
`;

export const FooterSocialLinkItem = styled.li`
  margin: 0 1rem;

  &:last-of-type {
    margin-right: 0;
  }

  @media screen and (max-width: 560px) {
    &:first-of-type {
      margin-left: 0;
    }
  }
`;

export const FooterSocialLink = styled.a``;

export const FooterLinkR = styled(Link)`
  font-size: 3rem;
  text-decoration: none;
  color: inherit;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-family: var(--font-heading);
  grid-column: 1/3;

  @media screen and (max-width: 700px) {
    grid-column: 1/4;
  }

  @media screen and (max-width: 560px) {
    grid-column: 1/2;
  }
`;
