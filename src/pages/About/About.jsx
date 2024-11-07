import Banner from "../../components/Banner/Banner";
import aboutBanner from "../../assets/images/aboutBanner.png";
import Collapse from "../../components/Collapse/Collapse";
import CollapseElements from "../../Listing/collapses.json";

function About() {
  return (
    <main>
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
    </main>
  );
}

export default About;
