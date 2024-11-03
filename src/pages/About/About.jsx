import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner"
import aboutBanner from '../../assets/images/aboutBanner.png'

function About() {
    return(
        <div>
            <Header/>
            <Banner imageSrc={aboutBanner} />

        </div>

    )
}

export default About;