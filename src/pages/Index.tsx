import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandsTrust from "@/components/BrandsTrust";
import ProvenResults from "@/components/ProvenResults";
import Services from "@/components/Services";
import ToolsWeUse from "@/components/ToolsWeUse";
import ClientStories from "@/components/ClientStories";
import MeetTeam from "@/components/MeetTeam";
import ROICalculator from "@/components/ROICalculator";
import Pricing from "@/components/Pricing";
import BookCall from "@/components/BookCall";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <BrandsTrust />
        <ProvenResults />
        <Services />
        <ToolsWeUse />
        <ClientStories />
        <MeetTeam />
        <ROICalculator />
        <Pricing />
        <BookCall />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
