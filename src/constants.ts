import i18n from './i18n';

export const LANGUAGES = i18n.options.supportedLngs
  ? i18n.options.supportedLngs.filter((item) => item !== 'cimode')
  : i18n.languages;

export const LANGUAGES_OPTIONS = LANGUAGES.map((item) => ({
    text: item,
    value: item,
}))