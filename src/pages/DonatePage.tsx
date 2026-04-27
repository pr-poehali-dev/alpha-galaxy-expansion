import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";
import { GL } from "@/components/gl";
import { useState } from "react";

const tiers = [
  {
    name: "VIP",
    price: "15 ₽",
    color: "text-green-400",
    border: "border-green-400/30",
    bg: "bg-green-400/5",
    perks: [
      "Цветной ник в чате",
      "Приоритетный вход на сервер",
      "Приватный дом (/sethome x2)",
      "Доступ к /fly в мирном режиме",
    ],
  },
  {
    name: "MODER",
    price: "250 ₽",
    color: "text-blue-400",
    border: "border-blue-400/30",
    bg: "bg-blue-400/5",
    perks: [
      "Всё из VIP",
      "Возможность кикать нарушителей",
      "Доступ к /tp и /tphere",
      "Значок модератора в чате",
    ],
  },
  {
    name: "ELITA",
    price: "500 ₽",
    color: "text-purple-400",
    border: "border-purple-400/30",
    bg: "bg-purple-400/5",
    perks: [
      "Всё из MODER",
      "Увеличенный инвентарь",
      "Приватный дом (/sethome x5)",
      "Доступ к эксклюзивным ивентам",
    ],
  },
  {
    name: "TITAN",
    price: "700 ₽",
    color: "text-orange-400",
    border: "border-orange-400/30",
    bg: "bg-orange-400/5",
    perks: [
      "Всё из ELITA",
      "/fly в любом режиме",
      "Кастомный префикс в чате",
      "Личный варп для других игроков",
    ],
  },
  {
    name: "ULTRA",
    price: "1000 ₽",
    color: "text-yellow-400",
    border: "border-yellow-400/30",
    bg: "bg-yellow-400/5",
    highlight: true,
    perks: [
      "Всё из TITAN",
      "Максимальные привилегии сервера",
      "Личная встреча с администрацией",
      "Имя в списке почётных игроков",
    ],
  },
];

export default function DonatePage() {
  const [hovering] = useState(false);

  return (
    <div className="min-h-screen relative">
      <GL hovering={hovering} />

      <div className="relative z-10 py-16">
        <div className="container">
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-sm text-foreground/50 hover:text-foreground transition-colors duration-150"
            >
              <Icon name="ArrowLeft" size={14} />
              Назад на главную
            </Link>
          </div>

          <div className="text-center mb-16">
            <p className="font-mono text-xs text-primary uppercase tracking-widest mb-4">Поддержать сервер</p>
            <h1 className="text-4xl sm:text-5xl font-sentient">
              Привилегии <br />
              <i className="font-light">для игроков</i>
            </h1>
            <p className="font-mono text-sm text-foreground/50 mt-6 max-w-md mx-auto">
              Поддержи развитие сервера и получи приятные бонусы к игре. Для получения привилегии напиши в Telegram.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative flex flex-col p-6 border ${tier.border} ${tier.bg} hover:brightness-125 transition-all duration-200`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="font-mono text-xs bg-yellow-400 text-black px-3 py-1 uppercase tracking-widest">
                      Топ
                    </span>
                  </div>
                )}

                <h3 className={`font-mono font-bold text-lg tracking-widest mb-1 ${tier.color}`}>
                  {tier.name}
                </h3>
                <p className={`font-mono text-2xl font-bold mb-5 ${tier.color}`}>
                  {tier.price}
                </p>

                <ul className="flex flex-col gap-3 flex-1">
                  {tier.perks.map((perk) => (
                    <li key={perk} className="flex items-start gap-2 text-sm text-foreground/60">
                      <Icon name="Check" size={14} className={`mt-0.5 shrink-0 ${tier.color}`} />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://t.me/blocscraft?text=Хочу купить привилегию ${tier.name} за ${tier.price}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 font-mono text-xs uppercase tracking-widest border ${tier.border} ${tier.color} px-4 py-2 text-center hover:opacity-80 transition-opacity duration-150`}
                >
                  Купить за {tier.price}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center border border-border p-8 bg-white/[0.02]">
            <p className="font-mono text-sm text-foreground/50 mb-4">
              Есть вопросы по привилегиям?
            </p>
            <a
              href="https://t.me/blocscraft"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-mono text-sm text-primary hover:text-primary/80 transition-colors duration-150"
            >
              <Icon name="Send" size={14} />
              Написать в Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
