"use client";

import React, { useEffect, useState } from "react";
import { WaveIcon, PaletteIcon, ChatIcon, BellIcon, RobotIcon, MoonIcon, BrainIcon, HourglassIcon, SparklesIcon, CheckIcon, CrossIcon } from "./Icons";

type IconType = 
  | "wave" | "palette" | "chat" | "bell" | "robot" | "moon"
  | "brain" | "hourglass" | "sparkles"
  | "check" | "cross";

const EMOJI_MAP: Record<IconType, string> = {
  wave: "👋",
  palette: "🎨",
  chat: "💬",
  bell: "🔔",
  robot: "🤖",
  moon: "🌙",
  brain: "🧠",
  hourglass: "⏳",
  sparkles: "✨",
  check: "✅",
  cross: "❌"
};

const SVG_MAP: Record<IconType, React.JSX.Element> = {
  wave: <WaveIcon />,
  palette: <PaletteIcon />,
  chat: <ChatIcon />,
  bell: <BellIcon />,
  robot: <RobotIcon />,
  moon: <MoonIcon />,
  brain: <BrainIcon />,
  hourglass: <HourglassIcon />,
  sparkles: <SparklesIcon />,
  check: <CheckIcon />,
  cross: <CrossIcon />
};

export default function DynamicIcon({ type, className = "" }: { type: IconType, className?: string }) {
  const [isApple, setIsApple] = useState(true); // Default to true to prevent hydration issues on Apple devices initially
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const ua = navigator.userAgent;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsApple(/Mac|iPhone|iPod|iPad/i.test(ua));
  }, []);

  if (!mounted) {
    // Return Apple emojis by default for SSR (suppressed hydration warning)
    return <span className={className} suppressHydrationWarning>{EMOJI_MAP[type]}</span>;
  }

  return (
    <span className={className}>
      {isApple ? EMOJI_MAP[type] : SVG_MAP[type]}
    </span>
  );
}
