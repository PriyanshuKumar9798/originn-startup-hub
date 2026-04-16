import { ChevronUp, ChevronDown, ExternalLink, Youtube, Facebook, Instagram } from "lucide-react";

const RightSidebar = () => (
  <aside className="space-y-4">
    {/* Current Status */}
    <div className="bg-primary text-primary-foreground p-5 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -translate-y-8 translate-x-8 rotate-45" />
      <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70 mb-1">Current Status</p>
      <h2 className="text-3xl font-extrabold uppercase italic leading-tight">Idea Stage</h2>
      <div className="mt-4 space-y-2">
        <p className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Stage Description</p>
        <p className="text-xs leading-relaxed opacity-90">
          Early-stage startup building a curated digital marketplace ecosystem.
        </p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Product Type</span>
          <span className="text-xs font-bold uppercase">Digital</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[10px] font-semibold uppercase tracking-widest opacity-70">Target Market</span>
          <span className="text-xs font-bold uppercase">Direct B2C</span>
        </div>
      </div>
    </div>

    {/* Rankings */}
    <div className="bg-card border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Startup Rankings</h3>
        <ExternalLink className="w-3.5 h-3.5 text-muted-foreground" />
      </div>
      <div className="space-y-3">
        {[
          { label: "Institute", rank: "#3", width: "75%" },
          { label: "Textile Sector", rank: "#2", width: "85%" },
        ].map((r, i) => (
          <div key={i}>
            <div className="flex justify-between items-center mb-1">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{r.label}</span>
              <span className="text-lg font-extrabold text-primary">{r.rank}</span>
            </div>
            <div className="w-full h-1.5 bg-muted overflow-hidden">
              <div className="h-full bg-primary transition-all duration-500" style={{ width: r.width }} />
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Community */}
    <div className="bg-card border border-border p-4">
      <div className="flex items-center gap-1.5 mb-3">
        <span className="text-originn-green text-xs">✔</span>
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Community Response</h3>
        <span className="text-[9px] font-bold text-originn-green uppercase ml-auto">Pro Feature</span>
      </div>
      <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">Total Upvotes</p>
      <div className="flex items-center gap-3 mb-4">
        <span className="text-4xl font-extrabold text-foreground">1,248</span>
        <div className="flex flex-col gap-0.5">
          <button className="w-7 h-7 border border-border flex items-center justify-center hover:bg-primary/5 transition-colors rounded-none">
            <ChevronUp className="w-4 h-4 text-foreground" />
          </button>
          <button className="w-7 h-7 border border-border flex items-center justify-center hover:bg-primary/5 transition-colors rounded-none">
            <ChevronDown className="w-4 h-4 text-foreground" />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-[10px] font-semibold uppercase tracking-widest text-foreground">Confidence <span className="text-originn-green">High</span></span>
        <span className="text-xs font-bold text-originn-green">94%</span>
      </div>
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className={`flex-1 h-2 ${i < 4 ? "bg-originn-green" : "bg-muted"}`} />
        ))}
      </div>
    </div>

    {/* Connect With Us - moved from left */}
    <div className="bg-card border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Connect With Us</h3>
        <span className="text-muted-foreground text-xs">🔗</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: <Youtube className="w-4 h-4" />, color: "text-red-600", hoverBg: "hover:bg-red-50" },
          { icon: <Facebook className="w-4 h-4" />, color: "text-blue-600", hoverBg: "hover:bg-blue-50" },
          { icon: <Instagram className="w-4 h-4" />, color: "text-pink-500", hoverBg: "hover:bg-pink-50" },
          { icon: <span className="font-bold text-sm">𝕏</span>, color: "text-foreground", hoverBg: "hover:bg-muted" },
        ].map((s, i) => (
          <button
            key={i}
            className={`w-full aspect-square border border-border flex items-center justify-center ${s.hoverBg} transition-colors rounded-none`}
          >
            <span className={s.color}>{s.icon}</span>
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default RightSidebar;
