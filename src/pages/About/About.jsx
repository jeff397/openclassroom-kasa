import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import aboutBanner from '../../assets/images/aboutBanner.png'
import Collapse from "../../components/Collapses/Collapses";
import CollapseElements from "../../Listing/collapses.json";

function About() {
    return(
        <div className="main_wrapper">
            <Header/>
            <Banner imageSrc={aboutBanner} />
            <div className="collapse">
                <div className="collapse_dropdown">
                {CollapseElements.map((item) => {
              return (
                <div key={item.id}>
                  <Collapse content={item.content} title={item.title} />
                </div>
              );
            })}
                </div>
            </div>

        </div>

    );
}

export default About;