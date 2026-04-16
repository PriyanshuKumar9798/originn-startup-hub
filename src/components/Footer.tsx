const Footer = () => (
  <footer className="bg-card border-t border-border mt-8">
    <div className="max-w-[1440px] mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div>
        <span className="font-bold text-sm tracking-wide text-foreground">Originn</span>
        <p className="text-[10px] uppercase tracking-widest text-muted-foreground mt-2 leading-relaxed">
          The global standard for digitizing local craftsmanship ecosystems.
        </p>
      </div>
      <div />
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-2">Platform</h4>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">Invest</a></li>
          <li><a href="#" className="hover:text-foreground">Raise</a></li>
          <li><a href="#" className="hover:text-foreground">Discover</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-[10px] font-bold uppercase tracking-widest text-foreground mb-2">Legal</h4>
        <ul className="space-y-1 text-xs text-muted-foreground">
          <li><a href="#" className="hover:text-foreground">Privacy</a></li>
          <li><a href="#" className="hover:text-foreground">Terms</a></li>
          <li><a href="#" className="hover:text-foreground">Security</a></li>
        </ul>
      </div>
    </div>
    <div className="max-w-[1440px] mx-auto px-4 pb-4">
      <p className="text-[10px] text-muted-foreground text-right">© 2024 Originn Tech</p>
    </div>
  </footer>
);

export default Footer;
