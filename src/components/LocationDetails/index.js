import { Container } from "../Container/Container";
import { TextRegular } from "../TextRegular/TextRegular";
import {
  LocationDetailsColLeft,
  LocationDetailsColRight,
  LocationDetailsCols,
  LocationDetailsHeading,
  LocationDetailsSmallHeading,
  LocationDetailsWrapper,
} from "./LocationDetailsElements";

const LocationDetails = () => {
  return (
    <>
      <LocationDetailsWrapper>
        <Container>
          <LocationDetailsCols>
            <LocationDetailsColLeft>
              <LocationDetailsHeading>
                <span className="location-details-heading">Our</span> location
              </LocationDetailsHeading>
            </LocationDetailsColLeft>
            <LocationDetailsColRight>
              <LocationDetailsSmallHeading>
                Vodičkova 682/20
              </LocationDetailsSmallHeading>
              <TextRegular darkBg className="location-text-regular">
                <span style={{ display: "block" }}>Prague </span>
                <span style={{ display: "block" }}>110 00 </span>
                <span style={{ display: "block" }}>
                  Czech Republic
                </span>
              </TextRegular>
              <TextRegular darkBg className="location-text-regular">
              Our dance school is open from 9:00 to 18:00 and you can come to see us anytime by appointment.
              </TextRegular>
            </LocationDetailsColRight>
          </LocationDetailsCols>
        </Container>
      </LocationDetailsWrapper>
    </>
  );
};

export default LocationDetails;
