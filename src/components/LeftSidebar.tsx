import { TrendingUp, GraduationCap, Flame, ExternalLink, Zap, Award } from "lucide-react";

const trendingStartups = [
  { name: "CraftVault", tag: "Hot", color: "bg-destructive/10 text-destructive" },
  { name: "GreenThread", tag: "New", color: "bg-originn-green/15 text-originn-green" },
  { name: "BazaarOS", tag: "Rising", color: "bg-primary/10 text-primary" },
  { name: "UrbanNest", tag: "Hot", color: "bg-destructive/10 text-destructive" },
];

const sectorStartups = [
  { name: "ShipKart", initial: "SK", accent: "from-primary to-blue-500" },
  { name: "LogiChain", initial: "LC", accent: "from-emerald-500 to-teal-500" },
  { name: "FreightBox", initial: "FB", accent: "from-amber-500 to-orange-500" },
  { name: "WareHive", initial: "WH", accent: "from-violet-500 to-purple-500" },
];

const instituteStartups = [
  { name: "AgroSense", initial: "AS", accent: "from-green-500 to-emerald-500" },
  { name: "MedPulse", initial: "MP", accent: "from-rose-500 to-pink-500" },
  { name: "EduBridge", initial: "EB", accent: "from-cyan-500 to-blue-500" },
];

const milestones = [
  { label: "Startups Launched", value: "2,340+", icon: Zap },
  { label: "Total Funding", value: "₹18Cr", icon: Award },
  { label: "Active Mentors", value: "120+", icon: GraduationCap },
];

const LeftSidebar = () => (
  <aside className="space-y-4">
    {/* Trending Now — on top */}
    <div className="bg-card border border-border overflow-hidden">
      <div className="bg-gradient-to-r from-destructive/10 to-orange-500/10 border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 bg-gradient-to-br from-destructive to-orange-500 flex items-center justify-center">
          <Flame className="w-3 h-3 text-white" />
        </div>
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Trending Now</h3>
      </div>
      <div className="divide-y divide-border">
        {trendingStartups.map((s, i) => (
          <div key={i} className="px-4 py-2.5 hover:bg-muted/50 cursor-pointer transition-colors group flex items-center gap-3">
            <div className="w-7 h-7 bg-muted flex items-center justify-center flex-shrink-0">
              <span className="text-[10px] font-extrabold text-foreground">{s.name.slice(0, 2).toUpperCase()}</span>
            </div>
            <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors flex-1">{s.name}</span>
            <span className={`text-[8px] font-bold uppercase tracking-wider px-1.5 py-0.5 ${s.color}`}>{s.tag}</span>
          </div>
        ))}
      </div>
    </div>

    {/* In Sector */}
    <div className="bg-card border border-border overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 bg-primary/10 flex items-center justify-center">
          <TrendingUp className="w-3 h-3 text-primary" />
        </div>
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">Logistics & Supply Chain</h3>
      </div>
      <div className="divide-y divide-border">
        {sectorStartups.map((s, i) => (
          <div key={i} className="px-4 py-2.5 hover:bg-muted/50 cursor-pointer transition-colors group flex items-center gap-3">
            <div className={`w-7 h-7 bg-gradient-to-br ${s.accent} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[9px] font-extrabold text-white">{s.initial}</span>
            </div>
            <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-2 bg-muted/30">
        <button className="text-[10px] font-semibold text-primary uppercase tracking-wider hover:underline flex items-center gap-1">
          View all in sector <ExternalLink className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>

    {/* From IIT Madras */}
    <div className="bg-card border border-border overflow-hidden">
      <div className="bg-primary/5 border-b border-border px-4 py-3 flex items-center gap-2">
        <div className="w-5 h-5 bg-primary/10 flex items-center justify-center">
          <GraduationCap className="w-3 h-3 text-primary" />
        </div>
        <h3 className="text-[10px] font-bold uppercase tracking-wider text-foreground">From IIT Madras</h3>
      </div>
      <div className="divide-y divide-border">
        {instituteStartups.map((s, i) => (
          <div key={i} className="px-4 py-2.5 hover:bg-muted/50 cursor-pointer transition-colors group flex items-center gap-3">
            <div className={`w-7 h-7 bg-gradient-to-br ${s.accent} flex items-center justify-center flex-shrink-0`}>
              <span className="text-[9px] font-extrabold text-white">{s.initial}</span>
            </div>
            <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors">{s.name}</span>
          </div>
        ))}
      </div>
      <div className="border-t border-border px-4 py-2 bg-muted/30">
        <button className="text-[10px] font-semibold text-primary uppercase tracking-wider hover:underline flex items-center gap-1">
          View all from IIT Madras <ExternalLink className="w-2.5 h-2.5" />
        </button>
      </div>
    </div>

    {/* Platform Stats */}
    <div className="bg-gradient-to-br from-primary to-originn-dark p-4 text-primary-foreground overflow-hidden relative">
      <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 -translate-y-6 translate-x-6 rotate-45" />
      <h3 className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-3">Originn Platform</h3>
      <div className="space-y-3">
        {milestones.map((m, i) => (
          <div key={i} className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-white/10 flex items-center justify-center flex-shrink-0">
              <m.icon className="w-3 h-3 text-white/80" />
            </div>
            <div>
              <p className="text-sm font-extrabold leading-none">{m.value}</p>
              <p className="text-[9px] uppercase tracking-wider opacity-60">{m.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </aside>
);

export default LeftSidebar;
