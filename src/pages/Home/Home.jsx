
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner"
import homeBanner from "../../assets/images/homeBanner.png";
import Card from "../../components/Cards/card";
import logements from "../../Listing/logements.json";
import Gallery from "../../components/Gallery/gallery";

function Home() {
    return (
      <div>
      <Header />
      <main>        
        <Banner imageSrc={homeBanner} bannerTitle="Chez vous, partout et ailleurs" />   
         <Gallery />

         </main>
      </div>
    );
  }

export default Home;