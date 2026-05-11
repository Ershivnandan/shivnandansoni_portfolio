export const THEMES = [
  {
    name: 'Light',
    value: 'light',
    icon: 'Sun'
  },
  {
    name: 'Dark',
    value: 'dark',
    icon: 'Moon'
  },
  {
    name: 'Midnight',
    value: 'midnight',
    icon: 'Stars'
  },
  {
    name: 'Graphite',
    value: 'graphite',
    icon: 'Palette'
  }
] as const

export type ThemeValue = typeof THEMES[number]['value']

export const DEFAULT_THEME: ThemeValue = 'light'