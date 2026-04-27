import Icon from "./ui/icon";

const features = [
  {
    icon: "Sword",
    title: "Честное выживание",
    description: "Классический survival без доната и pay-to-win. Всё решает твой скилл и труд.",
  },
  {
    icon: "Users",
    title: "Дружное сообщество",
    description: "Активные игроки, помощь новичкам и живое общение в чате и Telegram.",
  },
  {
    icon: "Map",
    title: "Большой мир",
    description: "Огромная карта для строительства и исследований. Найди своё место и построй базу мечты.",
  },
  {
    icon: "Zap",
    title: "Стабильный сервер",
    description: "Минимальный лаг, регулярные бэкапы и поддержка версий 1.16.5 — 1.20.",
  },
];

export function About() {
  return (
    <section id="about" className="relative z-10 py-24">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">О сервере</p>
          <h2 className="text-4xl sm:text-5xl font-sentient">
            Почему именно <br />
            <i className="font-light">наш сервер?</i>
          </h2>
          <p className="font-mono text-sm text-foreground/50 mt-6 max-w-md mx-auto">
            Мы создали место, где Minecraft — это снова про игру, а не про кошелёк.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px border border-border">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-10 border border-border bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200"
            >
              <Icon name={feature.icon} size={28} className="text-primary mb-5" />
              <h3 className="font-mono uppercase text-sm tracking-wider text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
