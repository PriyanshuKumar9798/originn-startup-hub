import { BadgeCheck, ChevronDown, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import kashmirImg from "@/assets/discover/kashmir-trends.jpg";
import shipkartImg from "@/assets/discover/shipkart.jpg";
import warehiveImg from "@/assets/discover/warehive.jpg";
import logichainImg from "@/assets/discover/logichain.jpg";
import threadportImg from "@/assets/discover/threadport.jpg";
import freightboxImg from "@/assets/discover/freightbox.jpg";
import bazaarosImg from "@/assets/discover/bazaaros.jpg";
import greenthreadImg from "@/assets/discover/greenthread.jpg";
import craftvaultImg from "@/assets/discover/craftvault.jpg";
import urbannestImg from "@/assets/discover/urbannest.jpg";
import pulserouteImg from "@/assets/discover/pulseroute.jpg";
import atlasloomImg from "@/assets/discover/atlasloom.jpg";

const filters = ["Category", "Stage", "Institute", "Product Type", "Target Market"];

const activeTags = [
  "Category: Logistics & Supply Chain",
  "Institute: IIT Madras",
  "Stage: Idea Stage",
];

const featuredStartups = [
  { name: "Kashmir Trends", summary: "Digital commerce infrastructure for Kashmiri apparel makers in global retail.", institute: "IIT Madras", category: "Logistics", image: kashmirImg },
  { name: "ShipKart", summary: "Autonomous routing software for cross-border, artisan-led distribution networks.", institute: "IIT Bombay", category: "Mobility", image: shipkartImg },
  { name: "WareHive", summary: "Composable warehousing helping fragmented manufacturers act as one export network.", institute: "IIT Madras", category: "Industrial", image: warehiveImg },
  { name: "LogiChain", summary: "Traceability and logistics orchestration for premium regional supply ecosystems.", institute: "IIM Ahmedabad", category: "Supply Infra", image: logichainImg },
  { name: "ThreadPort", summary: "AI-assisted export OS helping textile makers price, pack, and dispatch with ease.", institute: "NIFT Delhi", category: "Trade Tech", image: threadportImg },
  { name: "FreightBox", summary: "Cargo intelligence layer for smaller brands needing enterprise-grade visibility.", institute: "IIT Kharagpur", category: "Logistics", image: freightboxImg },
  { name: "BazaarOS", summary: "Market access stack connecting local producers to structured retail demand.", institute: "IIT Madras", category: "Retail OS", image: bazaarosImg },
  { name: "GreenThread", summary: "Sustainability visibility platform for ethical sourcing and climate reporting.", institute: "TERI School", category: "Sustainability", image: greenthreadImg },
  { name: "CraftVault", summary: "Brand suite turning artisan inventory into investor-grade D2C storefronts.", institute: "IIT Madras", category: "D2C", image: craftvaultImg },
  { name: "UrbanNest", summary: "Operations intelligence for distributed micro-warehouses in high-demand zones.", institute: "SPA Delhi", category: "PropTech", image: urbannestImg },
  { name: "PulseRoute", summary: "Delivery promise engine predicting slippage for founder-led ops teams.", institute: "IIT Roorkee", category: "Fulfilment", image: pulserouteImg },
  { name: "Atlas Loom", summary: "Cross-border textile intelligence for buyer discovery and demand forecasting.", institute: "IIT Madras", category: "Textile AI", image: atlasloomImg },
];

const Discover = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main className="max-w-[1440px] mx-auto px-4 pt-8 pb-16 space-y-8">
      <section className="discover-hero border border-border p-6 md:p-8 overflow-hidden relative">
        <div className="absolute right-0 top-0 h-48 w-48 border-l border-b border-border/80 panel-grid opacity-70" />
        <div className="relative max-w-4xl space-y-4">
          <div className="inline-flex items-center gap-2 border border-border bg-card px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">
            <Sparkles className="w-3.5 h-3.5" /> Discover
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tight leading-[0.88] text-foreground">
              Discover <span className="text-primary">Next.</span>
            </h1>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground leading-relaxed">
              Explore a sharper catalog of university-born startups, curated for operators, partners, and capital teams seeking category-defining ventures.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <div className="grid grid-cols-1 lg:grid-cols-[1.7fr_repeat(5,minmax(0,1fr))] border border-border bg-card">
          <div className="flex items-center gap-2 px-4 py-4 border-b lg:border-b-0 lg:border-r border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search startups, founders, institute..."
              className="w-full bg-transparent text-xs uppercase tracking-[0.2em] placeholder:text-muted-foreground/70 outline-none"
            />
          </div>
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`flex items-center justify-between px-4 py-4 text-left text-[10px] font-bold uppercase tracking-[0.2em] text-foreground hover:bg-muted/50 transition-colors ${index < filters.length - 1 ? "border-b lg:border-b-0 lg:border-r" : "border-b lg:border-b-0"} border-border`}
            >
              <span>{filter}</span>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {activeTags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 border border-primary/20 bg-primary text-primary-foreground px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em]"
            >
              {tag}
            </span>
          ))}
          <button className="px-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
            Clear all
          </button>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {featuredStartups.map((startup) => (
          <Link
            key={startup.name}
            to={startup.name === "Kashmir Trends" ? "/startup/kashmir-trends" : "/startup"}
            className="group border border-border bg-card card-hover overflow-hidden flex flex-col"
          >
            <div className="relative p-2.5 bg-muted/40 border-b border-border">
              <div className="aspect-square overflow-hidden relative">
                <img
                  src={startup.image}
                  alt={`${startup.name} cover`}
                  loading="lazy"
                  width={768}
                  height={768}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <div className="p-4 space-y-3 flex-1 flex flex-col">
              <div className="flex items-start justify-between gap-2">
                <h2 className="text-base font-black uppercase tracking-tight text-foreground leading-tight">{startup.name}</h2>
                <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              </div>
              <p className="text-[11px] leading-relaxed text-muted-foreground line-clamp-2 min-h-[34px]">{startup.summary}</p>
              <div className="space-y-2 text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground mt-auto">
                <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
                  <span>Institute</span>
                  <span className="text-foreground">{startup.institute}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Category</span>
                  <span className="bg-primary px-2 py-1 text-primary-foreground tracking-[0.18em]">{startup.category}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </section>

      <section className="flex justify-center pt-6">
        <div className="inline-flex border border-border bg-card">
          {[
            "‹",
            "1",
            "2",
            "3",
            "…",
            "12",
            "›",
          ].map((item, index) => (
            <button
              key={`${item}-${index}`}
              className={`min-w-10 h-10 px-3 text-xs font-bold uppercase tracking-[0.2em] border-r last:border-r-0 border-border transition-colors ${item === "1" ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted/50"}`}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr_1fr] gap-8 border-t border-border pt-10 text-xs uppercase tracking-[0.22em] text-muted-foreground">
        <div className="space-y-3 max-w-xs">
          <div className="flex items-center gap-3 text-foreground">
            <div className="w-10 h-10 bg-gradient-to-br from-originn-dark to-primary flex items-center justify-center text-primary-foreground font-black text-xl">O.</div>
            <span className="text-2xl font-black tracking-tight uppercase">Originn</span>
          </div>
          <p className="text-[11px] leading-relaxed normal-case tracking-normal">
            The global ledger of university-founded commercial excellence, connecting bold founders with modern capital and strategic operators.
          </p>
        </div>
        <div className="space-y-3">
          <p>Platform</p>
          <div className="space-y-2 text-foreground">
            <p>Discover</p>
            <p>Institutes</p>
            <p>Pre Order</p>
            <p>For Startups</p>
          </div>
        </div>
        <div className="space-y-3">
          <p>Connect</p>
          <div className="space-y-2 text-foreground">
            <p>Twitter / X</p>
            <p>LinkedIn</p>
            <p>Press Kit</p>
            <p>Contact</p>
          </div>
        </div>
      </section>

      <div className="flex items-center justify-between border-t border-border pt-4 text-[10px] font-bold uppercase tracking-[0.28em] text-muted-foreground">
        <span>© 2024 Originn Industries Global</span>
        <span>Data Privacy Architecture</span>
      </div>
    </main>
  </div>
);

export default Discover;