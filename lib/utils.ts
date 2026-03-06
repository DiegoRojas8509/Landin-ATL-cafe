import { clsx, type ClassValue } from 'clsx'

// ============================================================
// cn — className merger utility
// ============================================================
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs)
}

// ============================================================
// Image placeholder helper
// Returns a solid-color data URL for use while real images load
// ============================================================
export function placeholderDataUrl(color = '#2B1A11'): string {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1" height="1"><rect fill="${color}"/></svg>`
  return `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
}

// ============================================================
// Format a number with commas
// ============================================================
export function formatNumber(n: number): string {
  return n.toLocaleString('es-MX')
}
