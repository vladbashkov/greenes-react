import AboutSection from "../AboutSection/AboutSection";
import ShipParallax from "../ShipParallax/ShipParallax";
import ServiceSection from "../ServicesSection/ServicesSection";
import FactoryParallax from "../FactoryParallax/FactoryParallax";
import LogDistSection from "../LogDistSection/LogDistSection";
import CranesParallax from "../CranesParallax/CranesParallax";
import ProductsSection from "../ProductsSection/ProductsSection";
import PipesParallax from "../PipesParallax/PipesParallax";
import OfficesSection from "../OfficesSection/OfficesSection";

const MainPage = () => {
    return (
        <>
            <AboutSection />
            <ShipParallax />
            <ServiceSection />
            <FactoryParallax />
            <LogDistSection />
            <CranesParallax />
            <ProductsSection />
            <PipesParallax />
            <OfficesSection />
        </>
    )
}

export default MainPage;