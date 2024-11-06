import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/homeBanner.png";
import Card from "../../components/Cards/card";
import logements from "../../Listing/logements.json";
import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <div className="main_wrapper">
      <main>
        <Banner
          imageSrc={homeBanner}
          bannerTitle="Chez vous, partout et ailleurs"
        />
        <Gallery />
      </main>
    </div>
  );
}

export default Home;
