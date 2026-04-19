import { useState } from "react";
import { Globe, Bookmark, Share2, Linkedin, Building2, Rocket, Code, Users } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import fabricImg from "@/assets/fabric-thumb.jpg";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";
import CollaborateSection from "@/components/collaborate/CollaborateSection";

const tabs = ["About", "Updates", "Team", "Q & A", "Collaborate", "Jobs"];

const CenterColumn = () => {
  const [activeTab, setActiveTab] = useState("About");
  return (
  <main className="space-y-4">
    {/* Hero */}
    <div className="w-full overflow-hidden border border-border relative group">
      <img src={heroImg} alt="Kashmir mountain landscape" className="w-full h-56 object-cover rounded-none transition-transform duration-700 group-hover:scale-105" width={1200} height={512} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
      <div className="absolute bottom-3 left-4">
        <span className="bg-primary/90 text-primary-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">Featured Startup</span>
      </div>
    </div>

    {/* Profile Header */}
    <div className="bg-card border border-border p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-originn-green to-primary" />
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img src={fabricImg} alt="Kashmir Trends" className="w-14 h-14 object-cover rounded-none border-2 border-primary/20" width={56} height={56} />
          <div>
            <h1 className="text-lg font-extrabold text-primary uppercase tracking-wide">Kashmir Trends</h1>
            <div className="flex gap-2 mt-1">
              <span className="border border-border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                Logistics & Supply Chain
              </span>
              <span className="bg-primary text-primary-foreground px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider">
                IIT Madras
              </span>
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              Empowering Kashmir's local clothing makers with a digital marketplace.
            </p>
          </div>
        </div>
        <div className="flex gap-1.5">
          {[Globe, Bookmark, Share2].map((Icon, i) => (
            <button key={i} className="w-8 h-8 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors rounded-none group">
              <Icon className="w-3.5 h-3.5 text-primary group-hover:text-primary-foreground" />
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Horizontal Tab Bar */}
    <div className="bg-card border border-border flex">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider border-r border-border last:border-r-0 rounded-none transition-colors ${
            i === 0
              ? "bg-primary text-primary-foreground"
              : "text-foreground hover:bg-primary/5 hover:text-primary"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    {/* Company Overview */}
    <div className="bg-card border border-border p-5 card-hover group">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all">
          <Building2 className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">Company Overview</h2>
      </div>
      <p className="text-xs leading-relaxed text-foreground">
        Kashmir Trends is a tech driven e-commerce startup empowering local clothing manufacturers,
        artisans, and boutique producers across Kashmir. The platform bridges the gap between
        traditional Kashmiri craftsmanship and the modern digital marketplace.
      </p>
      <p className="text-xs leading-relaxed text-foreground mt-3">
        Founded with the vision of digitizing Kashmir's textile ecosystem, Kashmir Trends enables small
        and medium scale manufacturers to showcase their unique handmade apparel directly to buyers.
      </p>
    </div>

    {/* Incubation */}
    <div className="bg-card border border-border p-5 card-hover group">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all">
          <Rocket className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">Incubation and Background</h2>
      </div>
      <div className="flex gap-4 items-start">
        <div className="border-2 border-primary/20 bg-gradient-to-br from-primary/10 to-primary/5 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-primary whitespace-nowrap">
          IIT Madras
        </div>
        <p className="text-xs leading-relaxed text-foreground">
          Incubated at IIT Bombay's startup program focused on digitizing traditional Kashmiri
          craftsmanship and improving regional supply chains. This partnership provides access to
          cutting-edge supply chain optimization research.
        </p>
      </div>
    </div>

    {/* What are we building */}
    <div className="bg-card border border-border p-5 card-hover group">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center group-hover:from-primary group-hover:to-primary/80 transition-all">
          <Code className="w-3.5 h-3.5 text-primary group-hover:text-white transition-colors" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">What Are We Building?</h2>
      </div>
      <p className="text-xs leading-relaxed text-foreground">
        We are developing a unified digital marketplace and supply chain protocol that connects
        traditional Kashmiri artisans directly with global retailers. Our platform handles logistics,
        authentication, and secure payments, ensuring that the 'Tradition in every thread' is preserved
        while scaling the economic impact for local communities.
      </p>
    </div>

    {/* Founders */}
    <div className="bg-card border border-border p-5 card-hover">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
          <Users className="w-3.5 h-3.5 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">Meet the Founders</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { img: founder1, name: "Inayat Barkat", title: "Chief Executive Officer", school: "IIT Madras" },
          { img: founder2, name: "Leila Bakshi", title: "Creative Director", school: "London School of Design" },
        ].map((f, i) => (
          <div key={i} className="border border-border p-3 flex gap-3 items-center hover:border-primary/30 hover:shadow-sm transition-all group/card">
            <img src={f.img} alt={f.name} className="w-12 h-12 object-cover grayscale group-hover/card:grayscale-0 transition-all rounded-none border border-border" loading="lazy" width={48} height={48} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase">{f.name}</span>
                <Linkedin className="w-3.5 h-3.5 text-primary/50 hover:text-primary transition-colors cursor-pointer flex-shrink-0" />
              </div>
              <p className="text-[10px] font-semibold text-foreground uppercase">{f.title}</p>
              <p className="text-[10px] text-muted-foreground uppercase">{f.school}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </main>
);

export default CenterColumn;
