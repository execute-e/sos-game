import EvanImg from './images/evan.jpg';
import JadaImg from './images/jada.jpg';
import AaronImg from './images/aaron.jpg'

export interface IQuote {
  id: string;
  imgSrc: string;
  nameKey: string;
  majorKey: string;
  textKey: string;
  dateKey: string;
  dateTime: string;
  twitterLink?: string;
}

export const QUOTES: IQuote[] = [
  { id: '1', imgSrc: EvanImg, nameKey: "quotes.firstQuote.name", majorKey: "quotes.firstQuote.major", textKey: "quotes.firstQuote.text", dateKey: "quotes.firstQuote.date", dateTime: "2018-10-18", twitterLink: "#" },
  { id: '2', imgSrc: JadaImg, nameKey: "quotes.secondQuote.name", majorKey: "quotes.secondQuote.major", textKey: "quotes.secondQuote.text", dateKey: "quotes.secondQuote.date", dateTime: "2018-12-21", twitterLink: "#" },
  { id: '3', imgSrc: AaronImg, nameKey: "quotes.thirdQuote.name", majorKey: "quotes.thirdQuote.major", textKey: "quotes.thirdQuote.text", dateKey: "quotes.thirdQuote.date", dateTime: "2018-12-24", twitterLink: "#" },
];