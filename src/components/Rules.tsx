import Icon from "./ui/icon";

const rules = [
  {
    icon: "Shield",
    title: "Уважай других",
    description: "Запрещены оскорбления, мат и токсичное поведение. Общаемся по-человечески.",
  },
  {
    icon: "Hammer",
    title: "Без гриферства",
    description: "Ломать чужие постройки, воровать и разрушать территории других игроков запрещено.",
  },
  {
    icon: "Ban",
    title: "Без читов",
    description: "Запрещены любые читы, хаки и модификации, дающие нечестное преимущество.",
  },
  {
    icon: "MessageSquareOff",
    title: "Без спама",
    description: "Не флудить в чате, не рекламировать сторонние ресурсы и серверы.",
  },
  {
    icon: "Handshake",
    title: "Честная торговля",
    description: "Обман при обмене и торговле запрещён. Договорились — выполняй.",
  },
  {
    icon: "Smile",
    title: "Получай удовольствие",
    description: "Сервер создан для игры и общения. Помогай новичкам и делай атмосферу дружелюбной.",
  },
];

export function Rules() {
  return (
    <section id="rules" className="relative z-10 py-24 bg-black/80 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-16">
          <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Правила сервера</p>
          <h2 className="text-4xl sm:text-5xl font-sentient">
            Играем честно,<br />
            <i className="font-light">уважаем друг друга</i>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-border">
          {rules.map((rule) => (
            <div
              key={rule.title}
              className="p-8 border border-border bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-200"
            >
              <Icon name={rule.icon} size={24} className="text-primary mb-4" />
              <h3 className="font-mono uppercase text-sm tracking-wider text-foreground mb-2">
                {rule.title}
              </h3>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {rule.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center font-mono text-xs text-foreground/30 mt-8">
          Нарушение правил → мут / кик / бан на усмотрение администрации
        </p>
      </div>
    </section>
  );
}
