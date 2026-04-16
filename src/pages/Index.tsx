import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import CenterColumn from "@/components/CenterColumn";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="max-w-[1440px] mx-auto px-4 py-4 grid grid-cols-1 lg:grid-cols-[200px_1fr_280px] gap-4">
      <LeftSidebar />
      <CenterColumn />
      <RightSidebar />
    </div>
    <Footer />
  </div>
);

export default Index;
