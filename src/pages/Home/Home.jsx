import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/homeBanner.png";

import Gallery from "../../components/Gallery/Gallery";

function Home() {
  return (
    <main>
      <Banner
        imageSrc={homeBanner}
        bannerTitle="Chez vous, partout et ailleurs"
      />
      <Gallery />
    </main>
  );
}

export default Home;
