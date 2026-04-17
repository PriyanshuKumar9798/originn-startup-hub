import { useState } from "react";
import { PanelLeftClose, PanelLeftOpen } from "lucide-react";
import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import CenterColumn from "@/components/CenterColumn";
import RightSidebar from "@/components/RightSidebar";
import Footer from "@/components/Footer";

const Index = () => {
  const [leftOpen, setLeftOpen] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div
        className={`mx-auto px-4 py-4 grid grid-cols-1 gap-4 transition-all duration-300 ${
          leftOpen
            ? "max-w-[1440px] lg:grid-cols-[200px_1fr_280px]"
            : "max-w-[1180px] lg:grid-cols-[1fr_280px]"
        }`}
      >
        {leftOpen && (
          <div className="relative animate-fade-in">
            <LeftSidebar />
          </div>
        )}
        <div className="relative">
          {/* Collapse / Expand toggle */}
          <button
            onClick={() => setLeftOpen(!leftOpen)}
            aria-label={leftOpen ? "Hide left panel" : "Show left panel"}
            className="hidden lg:flex absolute -left-3 top-2 z-20 w-6 h-6 bg-card border border-border items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm"
          >
            {leftOpen ? (
              <PanelLeftClose className="w-3.5 h-3.5" />
            ) : (
              <PanelLeftOpen className="w-3.5 h-3.5" />
            )}
          </button>
          <CenterColumn />
        </div>
        <RightSidebar />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
