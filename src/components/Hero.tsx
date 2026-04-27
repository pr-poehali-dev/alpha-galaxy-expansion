import { GL } from "./gl";
import { Pill } from "./Pill";
import { Button } from "./ui/button";
import { useState } from "react";
import { Header } from "./Header";
import Icon from "./ui/icon";

const SERVER_IP = "olderwealth.minefort.com";

export function Hero() {
  const [hovering, setHovering] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyIP = () => {
    navigator.clipboard.writeText(SERVER_IP);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />
      <Header />

      <div className="pb-16 mt-auto text-center relative">
        <Pill className="mb-6">ВЫЖИВАНИЕ · ОНЛАЙН</Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient">
          Выживай. Строй. <br />
          <i className="font-light">Побеждай.</i>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[440px] mx-auto">
          Классический survival-сервер Minecraft — без доната, без читов. Только честная игра и крутое сообщество.
        </p>

        <button
          onClick={copyIP}
          onMouseEnter={() => setHovering(true)}
          onMouseLeave={() => setHovering(false)}
          className="mt-10 mx-auto flex items-center gap-3 border border-border bg-white/5 hover:bg-white/10 transition-colors duration-200 px-5 py-3 font-mono text-sm sm:text-base"
        >
          <Icon name="Server" size={16} className="text-primary" />
          <span className="text-foreground/80">{SERVER_IP}</span>
          <span className="text-primary ml-2 flex items-center gap-1">
            {copied
              ? <><Icon name="Check" size={14} /> Скопировано</>
              : <><Icon name="Copy" size={14} /> Копировать</>
            }
          </span>
        </button>
      </div>
    </div>
  );
}