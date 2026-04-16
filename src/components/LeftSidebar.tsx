import { Youtube, Facebook, Instagram } from "lucide-react";

const tabs = ["About", "Behind the scenes", "Team", "Collaborate", "Jobs"];

const LeftSidebar = () => (
  <aside className="space-y-4">
    <div className="bg-card border border-border">
      {tabs.map((tab, i) => (
        <button
          key={tab}
          className={`block w-full text-left px-4 py-2.5 text-xs font-semibold uppercase tracking-wider border-b border-border last:border-b-0 rounded-none ${
            i === 0 ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-muted"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>

    <div className="bg-card border border-border p-4">
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-xs font-bold uppercase tracking-wider text-foreground">Connect With Us</h3>
        <span className="text-muted-foreground text-xs">🔗</span>
      </div>
      <div className="grid grid-cols-4 gap-2">
        {[
          { icon: <Youtube className="w-4 h-4" />, color: "text-red-600" },
          { icon: <Facebook className="w-4 h-4" />, color: "text-blue-600" },
          { icon: <Instagram className="w-4 h-4" />, color: "text-pink-500" },
          { icon: <span className="font-bold text-sm">𝕏</span>, color: "text-foreground" },
        ].map((s, i) => (
          <button
            key={i}
            className="w-full aspect-square border border-border flex items-center justify-center hover:bg-muted rounded-none"
          >
            <span className={s.color}>{s.icon}</span>
          </button>
        ))}
      </div>
    </div>
  </aside>
);

export default LeftSidebar;
