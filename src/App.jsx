import "./App.css";

import Navbaar from "./Component/Navbaar";
import HeroSection from "./Component/Herosection";
import ProductCategories from "./Component/ProductCategories";
import DemoVideoCard from "./Component/DemoVideoCard";
import Product from "./Component/Product";
import PopularProduct from "./Component/PopularProduct";
import FeatureSection from "./Component/FeatureSection";
import GoOutPhoto from "./Component/GoOutPhoto";
import ProductPromo from "./Component/ProductPromo";
import ProductShowcase from "./Component/ProductShowcase";
import TestimonialCarousel from "./Component/TestimonialCarousel";
import NewsletterSubscription from "./Component/NewsletterSubscription";
import ContactForm from "./Component/ContactForm";
import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <div className="overflow-hidden">
        <Navbaar />
        <HeroSection  />
        <ProductCategories />
        <DemoVideoCard />
        <Product />
        <PopularProduct />
        <FeatureSection />
        <GoOutPhoto />
        <ProductPromo />
        <ProductShowcase />
        <TestimonialCarousel />
        <NewsletterSubscription/>
        <ContactForm />
        <Footer/>
      </div>
    </>
  );
}

export default App;
