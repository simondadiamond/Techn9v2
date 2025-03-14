import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// ISO 639-1 language codes that we support
const SUPPORTED_LANGUAGES = ['en', 'fr'] as const;
type SupportedLanguage = typeof SUPPORTED_LANGUAGES[number];

/**
 * Validates if a language code is supported
 */
export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

/**
 * Adds or updates a query parameter in a URL
 */
export function updateURLParameter(baseURL: string, param: string, value: string): string {
  try {
    const url = new URL(baseURL);
    url.searchParams.set(param, encodeURIComponent(value));
    return url.toString();
  } catch (error) {
    console.error('Error updating URL parameter:', error);
    return baseURL;
  }
}

/**
 * Creates a consultation URL with the current language
 */
export function createConsultationURL(language: string): string {
  const BASE_URL = 'https://consultation.techn9.com/';
  
  // Validate language code
  if (!isValidLanguage(language)) {
    language = 'en'; // Default to English if invalid
  }
  
  return updateURLParameter(BASE_URL, 'lang', language);
}
