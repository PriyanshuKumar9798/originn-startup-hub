import { ArrowRight, BadgeCheck, ChevronDown, Search, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const filters = ["Category", "Stage", "Institute", "Product Type", "Target Market"];

const activeTags = [
  "Category: Logistics & Supply Chain",
  "Institute: IIT Madras",
  "Stage: Idea Stage",
];

const featuredStartups = [
  {
    name: "Kashmir Trends",
    summary: "Digital commerce infrastructure bringing Kashmiri apparel makers into global retail supply chains.",
    institute: "IIT Madras",
    category: "Logistics & Supply Chain",
    accent: "KT",
  },
  {
    name: "ShipKart",
    summary: "Smart routing software designed for cross-border inventory and artisan-led distribution networks.",
    institute: "IIT Bombay",
    category: "Mobility",
    accent: "SK",
  },
  {
    name: "WareHive",
    summary: "Composable warehousing systems that help fragmented manufacturers operate as one export-ready network.",
    institute: "IIT Madras",
    category: "Industrial SaaS",
    accent: "WH",
  },
  {
    name: "LogiChain",
    summary: "Traceability and logistics orchestration for regional supply ecosystems with premium buyers.",
    institute: "IIM Ahmedabad",
    category: "Supply Infrastructure",
    accent: "LC",
  },
  {
    name: "ThreadPort",
    summary: "AI-assisted export operating system helping textile makers price, pack, and dispatch with confidence.",
    institute: "NIFT Delhi",
    category: "Trade Tech",
    accent: "TP",
  },
  {
    name: "FreightBox",
    summary: "Cargo intelligence layer for smaller brands that need visibility without enterprise complexity.",
    institute: "IIT Kharagpur",
    category: "Logistics Data",
    accent: "FB",
  },
  {
    name: "BazaarOS",
    summary: "Market access stack connecting local producers to structured retail demand and merchandising flows.",
    institute: "IIT Madras",
    category: "Retail Systems",
    accent: "BO",
  },
  {
    name: "GreenThread",
    summary: "Sustainability visibility platform for ethical sourcing, batch verification, and climate reporting.",
    institute: "TERI School",
    category: "Climate Supply",
    accent: "GT",
  },
  {
    name: "CraftVault",
    summary: "Brand packaging suite turning artisan inventory into investor-grade storefronts and purchase pipelines.",
    institute: "IIT Madras",
    category: "D2C Infrastructure",
    accent: "CV",
  },
  {
    name: "UrbanNest",
    summary: "Property and operations intelligence for distributed micro-warehouses near high-demand urban nodes.",
    institute: "SPA Delhi",
    category: "Ops Tech",
    accent: "UN",
  },
  {
    name: "PulseRoute",
    summary: "Delivery promise engine that predicts slippage and helps founder-led teams stay ahead of customer risk.",
    institute: "IIT Roorkee",
    category: "Fulfilment AI",
    accent: "PR",
  },
  {
    name: "Atlas Loom",
    summary: "Cross-border textiles intelligence for buyer discovery, catalog structuring, and demand forecasting.",
    institute: "IIT Madras",
    category: "Textile Intelligence",
    accent: "AL",
  },
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

      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
        {featuredStartups.map((startup) => (
          <Link
            key={startup.name}
            to={startup.name === "Kashmir Trends" ? "/startup/kashmir-trends" : "/startup"}
            className="group border border-border bg-card card-hover overflow-hidden"
          >
            <div className="relative p-4 border-b border-border discover-tile min-h-[210px] flex items-center justify-center panel-grid">
              <div className="accent-orbit relative w-36 h-36 bg-card flex items-center justify-center">
                <div className="absolute inset-3 border border-primary/15" />
                <span className="text-4xl font-black uppercase tracking-tight text-primary">{startup.accent}</span>
              </div>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-2">
                  <h2 className="text-xl font-black uppercase tracking-tight text-foreground leading-none">{startup.name}</h2>
                  <p className="text-xs leading-relaxed text-muted-foreground min-h-[54px]">{startup.summary}</p>
                </div>
                <BadgeCheck className="w-4 h-4 text-primary flex-shrink-0 mt-1" />
              </div>
              <div className="space-y-2 text-[9px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <div className="flex items-center justify-between gap-3 border-t border-border pt-3">
                  <span>Institute</span>
                  <span className="text-foreground">{startup.institute}</span>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span>Category</span>
                  <span className="border border-primary/20 bg-primary px-2 py-1 text-primary-foreground">{startup.category}</span>
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