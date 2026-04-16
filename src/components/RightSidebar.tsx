import { ChevronUp, ChevronDown, ExternalLink } from "lucide-react";

const RightSidebar = () => (
  <aside className="space-y-4">
    {/* Current Status */}
    <div className="bg-primary text-primary-foreground p-5">
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
            <div className="w-full h-1.5 bg-muted">
              <div className="h-full bg-primary" style={{ width: r.width }} />
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
          <button className="w-7 h-7 border border-border flex items-center justify-center hover:bg-muted rounded-none">
            <ChevronUp className="w-4 h-4 text-foreground" />
          </button>
          <button className="w-7 h-7 border border-border flex items-center justify-center hover:bg-muted rounded-none">
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
  </aside>
);

export default RightSidebar;
