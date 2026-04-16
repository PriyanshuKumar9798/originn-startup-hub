import { TrendingUp, GraduationCap, Flame, ExternalLink } from "lucide-react";

const sectorStartups = [
  { name: "ShipKart", desc: "AI-powered last-mile delivery", votes: 892 },
  { name: "LogiChain", desc: "Blockchain supply tracking", votes: 1103 },
  { name: "FreightBox", desc: "Cross-border freight platform", votes: 647 },
  { name: "WareHive", desc: "Smart warehouse management", votes: 421 },
];

const instituteStartups = [
  { name: "AgroSense", desc: "Precision agriculture IoT", votes: 2041 },
  { name: "MedPulse", desc: "Rural telemedicine network", votes: 1580 },
  { name: "EduBridge", desc: "Vernacular learning platform", votes: 978 },
];

const trendingStartups = [
  { name: "CraftVault", desc: "NFT-backed artisan certificates", tag: "Hot" },
  { name: "GreenThread", desc: "Sustainable textile recycling", tag: "New" },
  { name: "BazaarOS", desc: "Marketplace-as-a-service", tag: "Rising" },
];

const LeftSidebar = () => (
  <aside className="space-y-4">
    {/* Recommended in Sector */}
    <div className="bg-card border border-border overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 bg-primary/10 flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-primary" />
        </div>
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">In Sector</h3>
        <span className="ml-auto text-[9px] font-semibold text-primary uppercase tracking-wider">Logistics</span>
      </div>
      <div className="divide-y divide-border">
        {sectorStartups.map((s, i) => (
          <div key={i} className="px-4 py-2.5 hover:bg-muted/50 cursor-pointer transition-colors group">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <span className="text-[9px] font-semibold text-muted-foreground">▲ {s.votes}</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-2 bg-muted/30">
        <button className="text-[10px] font-semibold text-primary uppercase tracking-wider hover:underline flex items-center gap-1">
          View all in sector <ExternalLink className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>

    {/* Recommended in Institute */}
    <div className="bg-card border border-border overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 bg-primary/10 flex items-center justify-center">
          <GraduationCap className="w-3 h-3 text-primary" />
        </div>
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">From IIT Madras</h3>
      </div>
      <div className="divide-y divide-border">
        {instituteStartups.map((s, i) => (
          <div key={i} className="px-4 py-2.5 hover:bg-muted/50 cursor-pointer transition-colors group">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <span className="text-[9px] font-semibold text-muted-foreground">▲ {s.votes}</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-2 bg-muted/30">
        <button className="text-[10px] font-semibold text-primary uppercase tracking-wider hover:underline flex items-center gap-1">
          View all from IIT Madras <ExternalLink className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>

    {/* Trending Now */}
    <div className="bg-card border border-border overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 bg-primary/10 flex items-center justify-center">
          <Flame className="w-3 h-3 text-primary" />
        </div>
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Trending Now</h3>
      </div>
      <div className="divide-y divide-border">
        {trendingStartups.map((s, i) => (
          <div key={i} className="px-4 py-2.5 hover:bg-muted/50 cursor-pointer transition-colors group">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
              <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 ${
                s.tag === "Hot" ? "bg-destructive/10 text-destructive" :
                s.tag === "New" ? "bg-originn-green/15 text-originn-green" :
                "bg-primary/10 text-primary"
              }`}>{s.tag}</span>
            </div>
            <p className="text-[10px] text-muted-foreground mt-0.5">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default LeftSidebar;
