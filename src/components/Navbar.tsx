import { Search } from "lucide-react";

const Navbar = () => (
  <header className="bg-card border-b border-border sticky top-0 z-50">
    <div className="max-w-[1440px] mx-auto px-4 flex items-center justify-between h-12">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-originn-dark flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">O.</span>
          </div>
          <span className="font-bold text-sm tracking-wide text-foreground">Originn</span>
        </div>
        <nav className="hidden md:flex items-center gap-5 text-xs font-semibold uppercase tracking-wider text-foreground">
          <a href="#" className="hover:text-primary">Discover</a>
          <a href="#" className="hover:text-primary">Pre Order</a>
          <a href="#" className="hover:text-primary">About Us</a>
        </nav>
        <button className="hidden md:flex items-center gap-1.5 bg-primary text-primary-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none">
          <span>⚡</span> For Startups
        </button>
      </div>
      <div className="flex items-center gap-3">
        <div className="hidden md:flex items-center border border-border bg-card px-2 py-1.5 gap-1.5 rounded-none">
          <Search className="w-3.5 h-3.5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search startups"
            className="bg-transparent text-xs outline-none w-32 placeholder:text-muted-foreground"
          />
        </div>
        <button className="bg-primary text-primary-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-none">
          Sign In
        </button>
      </div>
    </div>
  </header>
);

export default Navbar;
