import { Globe, Bookmark, Share2, Linkedin, Building2, Rocket, Code, Users } from "lucide-react";
import heroImg from "@/assets/hero-mountains.jpg";
import fabricImg from "@/assets/fabric-thumb.jpg";
import founder1 from "@/assets/founder1.jpg";
import founder2 from "@/assets/founder2.jpg";

const CenterColumn = () => (
  <main className="space-y-4">
    {/* Hero */}
    <div className="w-full overflow-hidden border border-border">
      <img src={heroImg} alt="Kashmir mountain landscape" className="w-full h-48 object-cover rounded-none" width={1200} height={512} />
    </div>

    {/* Profile Header */}
    <div className="bg-card border border-border p-4">
      <div className="flex items-start justify-between">
        <div className="flex gap-3">
          <img src={fabricImg} alt="Kashmir Trends" className="w-14 h-14 object-cover rounded-none" width={56} height={56} />
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
            <button key={i} className="w-8 h-8 border border-border flex items-center justify-center hover:bg-muted rounded-none">
              <Icon className="w-3.5 h-3.5 text-primary" />
            </button>
          ))}
        </div>
      </div>
    </div>

    {/* Company Overview */}
    <div className="bg-card border border-border p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-originn-blue-light flex items-center justify-center">
          <Building2 className="w-3.5 h-3.5 text-primary" />
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
    <div className="bg-card border border-border p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-originn-blue-light flex items-center justify-center">
          <Rocket className="w-3.5 h-3.5 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">Incubation and Background</h2>
      </div>
      <div className="flex gap-4 items-start">
        <div className="border border-border px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-primary whitespace-nowrap">
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
    <div className="bg-card border border-border p-5">
      <div className="flex items-center gap-2 mb-3">
        <div className="w-6 h-6 bg-originn-blue-light flex items-center justify-center">
          <Code className="w-3.5 h-3.5 text-primary" />
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
    <div className="bg-card border border-border p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-6 h-6 bg-originn-blue-light flex items-center justify-center">
          <Users className="w-3.5 h-3.5 text-primary" />
        </div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-foreground">Meet the Founders</h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {[
          { img: founder1, name: "Inayat Barkat", title: "Chief Executive Officer", school: "IIT Madras" },
          { img: founder2, name: "Leila Bakshi", title: "Creative Director", school: "London School of Design" },
        ].map((f, i) => (
          <div key={i} className="border border-border p-3 flex gap-3 items-center">
            <img src={f.img} alt={f.name} className="w-12 h-12 object-cover grayscale rounded-none" loading="lazy" width={48} height={48} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-primary uppercase">{f.name}</span>
                <Linkedin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
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
