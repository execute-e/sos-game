import i18n from './i18n';

export const LANGUAGES = i18n.options.supportedLngs
  ? i18n.options.supportedLngs.filter((item) => item !== 'cimode')
  : i18n.languages;

export const LANGUAGES_OPTIONS = LANGUAGES.map((item) => ({
    text: item,
    value: item,
}))

interface IRequirement {
  id: string
  titleKey: string
  descriptionKey: string;
}

export const REQUIREMENTS: IRequirement[] = [
  { id: '1', titleKey: 'requirements.table.firstTitle', descriptionKey: 'requirements.table.firstText' },
  { id: '2', titleKey: 'requirements.table.secondTitle', descriptionKey: 'requirements.table.secondText' },
  { id: '3', titleKey: 'requirements.table.thirdTitle', descriptionKey: 'requirements.table.thirdText' },
  { id: '4', titleKey: 'requirements.table.fourthTitle', descriptionKey: 'requirements.table.fourthText' },
  { id: '5', titleKey: 'requirements.table.fifthTitle', descriptionKey: 'requirements.table.fifthText' },
];