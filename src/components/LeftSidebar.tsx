import { TrendingUp, GraduationCap, Flame, ExternalLink, Zap, Award, ArrowUpRight } from "lucide-react";

const trendingStartups = [
  { name: "CraftVault", initial: "CV", accent: "from-rose-500 via-red-500 to-orange-500", tag: "HOT" },
  { name: "GreenThread", initial: "GT", accent: "from-emerald-500 via-green-500 to-teal-500", tag: "NEW" },
  { name: "BazaarOS", initial: "BO", accent: "from-blue-500 via-indigo-500 to-violet-500", tag: "RISING" },
  { name: "UrbanNest", initial: "UN", accent: "from-amber-500 via-orange-500 to-red-500", tag: "HOT" },
];

const sectorStartups = [
  { name: "ShipKart", initial: "SK", accent: "from-primary to-blue-500" },
  { name: "LogiChain", initial: "LC", accent: "from-emerald-500 to-teal-600" },
  { name: "FreightBox", initial: "FB", accent: "from-amber-500 to-orange-600" },
  { name: "WareHive", initial: "WH", accent: "from-violet-500 to-purple-600" },
];

const instituteStartups = [
  { name: "AgroSense", initial: "AS", accent: "from-green-500 to-emerald-600" },
  { name: "MedPulse", initial: "MP", accent: "from-rose-500 to-pink-600" },
  { name: "EduBridge", initial: "EB", accent: "from-cyan-500 to-blue-600" },
];

const milestones = [
  { label: "Startups Launched", value: "2,340+", icon: Zap },
  { label: "Total Funding", value: "₹18Cr", icon: Award },
  { label: "Active Mentors", value: "120+", icon: GraduationCap },
];

interface StartupRowProps {
  name: string;
  initial: string;
  accent: string;
  tag?: string;
}

const StartupRow = ({ name, initial, accent, tag }: StartupRowProps) => (
  <div className="px-3 py-2 hover:bg-muted/60 cursor-pointer transition-all group flex items-center gap-2.5 border-l-2 border-transparent hover:border-primary">
    <div className={`relative w-8 h-8 bg-gradient-to-br ${accent} flex items-center justify-center flex-shrink-0 shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all`}>
      <span className="text-[10px] font-extrabold text-white tracking-tight">{initial}</span>
      <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/30 pointer-events-none" />
    </div>
    <span className="text-[11px] font-bold text-foreground group-hover:text-primary transition-colors flex-1 truncate">{name}</span>
    {tag ? (
      <span className="text-[8px] font-extrabold tracking-widest text-muted-foreground group-hover:text-primary transition-colors">{tag}</span>
    ) : (
      <ArrowUpRight className="w-3 h-3 text-muted-foreground/0 group-hover:text-primary transition-all" />
    )}
  </div>
);

const ModuleHeader = ({
  icon: Icon,
  title,
  iconBg = "bg-primary/10",
  iconColor = "text-primary",
  accentBar = "bg-gradient-to-r from-primary via-primary/60 to-transparent",
}: {
  icon: React.ElementType;
  title: string;
  iconBg?: string;
  iconColor?: string;
  accentBar?: string;
}) => (
  <div className="relative border-b border-border">
    <div className={`absolute top-0 left-0 right-0 h-0.5 ${accentBar}`} />
    <div className="px-3 py-2.5 flex items-center gap-2 bg-gradient-to-b from-muted/40 to-transparent">
      <div className={`w-5 h-5 ${iconBg} flex items-center justify-center`}>
        <Icon className={`w-3 h-3 ${iconColor}`} />
      </div>
      <h3 className="text-[10px] font-extrabold uppercase tracking-wider text-foreground">{title}</h3>
    </div>
  </div>
);

const LeftSidebar = () => (
  <aside className="space-y-3 lg:sticky lg:top-16">
    {/* Trending Now */}
    <div className="bg-card border border-border overflow-hidden card-hover">
      <ModuleHeader
        icon={Flame}
        title="Trending Now"
        iconBg="bg-gradient-to-br from-destructive to-orange-500"
        iconColor="text-white"
        accentBar="bg-gradient-to-r from-destructive via-orange-500 to-transparent"
      />
      <div className="divide-y divide-border/60">
        {trendingStartups.map((s, i) => (
          <StartupRow key={i} {...s} />
        ))}
      </div>
    </div>

    {/* In Sector */}
    <div className="bg-card border border-border overflow-hidden card-hover">
      <ModuleHeader icon={TrendingUp} title="Logistics & Supply Chain" />
      <div className="divide-y divide-border/60">
        {sectorStartups.map((s, i) => (
          <StartupRow key={i} {...s} />
        ))}
      </div>
      <button className="w-full border-t border-border px-3 py-2 bg-muted/30 hover:bg-muted/60 transition-colors text-[10px] font-semibold text-primary uppercase tracking-wider flex items-center justify-center gap-1 group">
        View all <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>

    {/* From IIT Madras */}
    <div className="bg-card border border-border overflow-hidden card-hover">
      <ModuleHeader icon={GraduationCap} title="From IIT Madras" />
      <div className="divide-y divide-border/60">
        {instituteStartups.map((s, i) => (
          <StartupRow key={i} {...s} />
        ))}
      </div>
      <button className="w-full border-t border-border px-3 py-2 bg-muted/30 hover:bg-muted/60 transition-colors text-[10px] font-semibold text-primary uppercase tracking-wider flex items-center justify-center gap-1 group">
        View all <ExternalLink className="w-2.5 h-2.5 group-hover:translate-x-0.5 transition-transform" />
      </button>
    </div>

    {/* Platform Stats */}
    <div className="relative bg-gradient-to-br from-primary via-primary to-originn-dark p-4 text-primary-foreground overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 -translate-y-8 translate-x-8 rotate-45" />
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 translate-y-6 -translate-x-6 rotate-45" />
      <div className="relative">
        <h3 className="text-[10px] font-extrabold uppercase tracking-widest opacity-70 mb-3">Originn Platform</h3>
        <div className="space-y-2.5">
          {milestones.map((m, i) => (
            <div key={i} className="flex items-center gap-2.5 group cursor-default">
              <div className="w-7 h-7 bg-white/10 group-hover:bg-white/20 flex items-center justify-center flex-shrink-0 transition-colors">
                <m.icon className="w-3.5 h-3.5 text-white/90" />
              </div>
              <div>
                <p className="text-sm font-extrabold leading-none tracking-tight">{m.value}</p>
                <p className="text-[9px] uppercase tracking-wider opacity-60 mt-0.5">{m.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </aside>
);

export default LeftSidebar;
