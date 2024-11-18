import Banner from "../../components/Banner/Banner";
import homeBanner from "../../assets/images/homeBanner.png";

import Gallery from "../../components/Gallery/gallery";

function Home() {
  return (
    <main>
      <Banner
        imageSrc={homeBanner}
        bannerTitle={
          <span>
            Chez vous, <br className="break" /> partout et ailleurs
          </span>
        }
      />
      <Gallery />
    </main>
  );
}

export default Home;
