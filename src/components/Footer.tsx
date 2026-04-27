import Icon from "./ui/icon";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border bg-black/80 backdrop-blur-sm py-10">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 font-mono text-sm text-foreground/50">
          <Icon name="Server" size={14} className="text-primary" />
          <span>olderwealth.minefort.com</span>
        </div>

        <p className="font-mono text-xs text-foreground/30 uppercase tracking-widest">
          Minecraft · 1.16.5 — 1.20
        </p>

        <a
          href="https://t.me/blocscraft"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors duration-150"
        >
          <Icon name="Send" size={14} />
          <span>Telegram</span>
        </a>
      </div>
    </footer>
  );
}
