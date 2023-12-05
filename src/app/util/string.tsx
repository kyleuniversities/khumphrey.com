/**
 * Localized method for pluralizing data tokens
 * Not a general pluralizing method
 */
export const pluralize = (text: string): string => {
  if (text === 'technology') {
    return 'technologies';
  }
  return text + 's';
};
