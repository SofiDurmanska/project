import styled from "styled-components";

export const LocationDetailsWrapper = styled.section`
  background: var(--color-dark);
  padding: 10rem 0;
`;
export const LocationDetailsCols = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media screen and (max-width: 768px) {
    padding: 0 2rem;
  }

  @media screen and (max-width: 560px) {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;
export const LocationDetailsColLeft = styled.div``;

export const LocationDetailsColRight = styled.div``;

export const LocationDetailsHeading = styled.h2`
  color: var(--color-light);
  font-size: 7rem;
  font-weight: 900;
  text-transform: uppercase;
  line-height: 1;
  font-family: var(--font-heading);
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 6rem;
  }

  @media screen and (max-width: 560px) {
    font-size: 5rem;
  }

  span.location-details-heading {
    display: block;

    @media screen and (max-width: 560px) {
      display: initial;
    }
  }
`;
export const LocationDetailsSmallHeading = styled.h3`
  line-height: 1;
  font-family: var(--font-heading);
  color: var(--color-accent);
  font-size: 3rem;
  margin-bottom: 2rem;
`;
