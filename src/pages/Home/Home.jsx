
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner"
import homeBanner from "../../assets/images/homeBanner.png"

function Home() {
    return (
      <div>
      <Header />
        <Banner imageSrc={homeBanner} bannerTitle="Chez vous, partout et ailleurs" />        
      </div>
    );
  }

export default Home;