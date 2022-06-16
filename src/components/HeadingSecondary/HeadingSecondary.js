import styled from "styled-components";

export const HeadingSecondary = styled.h2`
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-family: var(--font-heading);
  font-size: 5rem;
  max-width: 30rem;
  margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
    max-width: 18rem;
  }
`;
