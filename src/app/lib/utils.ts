// lib/utils.ts
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Development animation debug
export const debugAnimation = process.env.NODE_ENV === 'development' ? {
  type: "spring",
  stiffness: 100,
  damping: 10,
  duration: 2 // Slower for debugging
} : {
  duration: 0.5
}