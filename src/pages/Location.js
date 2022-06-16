import LocationDetails from "../components/LocationDetails";
import LocationMap from "../components/Map";
import ScrollToTop from "../components/ScrollToTop/ScrollToTop";

const Location = () => {
  return (
    <>
      <ScrollToTop />
      <LocationMap />
      <LocationDetails />
    </>
  );
};

export default Location;
