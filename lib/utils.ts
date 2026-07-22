import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** First letters of the first two words — works for Latin and Gurmukhi names. */
export function getInitials(name: string): string {
  const words = name.trim().split(/\s+/).slice(0, 2);
  return words.map((w) => Array.from(w)[0] ?? "").join("");
}

/** Deterministic forest/hazard gradient for an avatar, picked from a string key. */
const AVATAR_GRADIENTS = [
  "from-forest-500 to-forest-700",
  "from-forest-400 to-forest-600",
  "from-hazard to-hazard-600",
  "from-forest-600 to-charcoal-800",
];

export function avatarGradient(key: string): string {
  let hash = 0;
  for (let i = 0; i < key.length; i++) hash = (hash * 31 + key.charCodeAt(i)) >>> 0;
  return AVATAR_GRADIENTS[hash % AVATAR_GRADIENTS.length];
}
