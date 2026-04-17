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
      <div className="max-w-[1440px] mx-auto px-4 py-4 overflow-x-clip">
        <div className={`grid grid-cols-1 gap-4 lg:grid-cols-[220px_1fr_280px] transition-transform duration-300 ease-out ${leftOpen ? "lg:translate-x-0" : "lg:-translate-x-[110px]"}`}>
        <div className="relative">
          {/* Hide content (not the slot) so center width stays fixed */}
          <div
            className={`transition-opacity duration-200 ${
              leftOpen ? "opacity-100" : "opacity-0 pointer-events-none invisible"
            }`}
          >
            <LeftSidebar />
          </div>
        </div>

        <div className="relative">
          {/* Toggle pinned on the divider between left and center */}
          <button
            onClick={() => setLeftOpen(!leftOpen)}
            aria-label={leftOpen ? "Hide left panel" : "Show left panel"}
            className="hidden lg:flex absolute -left-5 top-2 z-20 w-6 h-6 bg-card border border-border items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors shadow-sm"
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
      </div>
      <Footer />
    </div>
  );
};

export default Index;
