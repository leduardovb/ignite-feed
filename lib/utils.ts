import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function userFallback(name: string) {
  const [firstName, secondName] = name.split(' ')

  if (secondName) {
    return `${firstName.charAt(0)}${secondName.charAt(0)}`
  }

  return `${firstName.charAt(0)}${firstName.charAt(1)}`
}
