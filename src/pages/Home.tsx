import { CardSection } from "@/components/CardSection";
import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { ProductShowcase } from "@/components/ProductShow";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <ProductShowcase sliceIndex={0} title="Our Popular Products" description="Browse through our selection of high-quality stationary items perfect for your office or home." />
      <FeaturesSection />
      <CardSection/>
      <ProductShowcase sliceIndex={-4} title="Personalized For You" />
    </div>
  );
};

export default Home;
