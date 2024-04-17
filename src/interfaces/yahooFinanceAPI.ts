export interface QuoteSummary {
  summaryDetail: SummaryDetail;
  price: Price;
}

export interface SummaryDetail {
  maxAge: number;
  priceHint: number;
  previousClose: number;
  open: number;
  dayLow: number;
  dayHigh: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  regularMarketDayLow: number;
  regularMarketDayHigh: number;
  dividendRate: number;
  dividendYield: number;
  exDividendDate: string;
  payoutRatio: number;
  fiveYearAvgDividendYield: number;
  beta: number;
  trailingPE: number;
  forwardPE: number;
  volume: number;
  regularMarketVolume: number;
  averageVolume: number;
  averageVolume10days: number;
  averageDailyVolume10Day: number;
  bid: number;
  ask: number;
  bidSize: number;
  askSize: number;
  marketCap: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  priceToSalesTrailing12Months: number;
  fiftyDayAverage: number;
  twoHundredDayAverage: number;
  trailingAnnualDividendRate: number;
  trailingAnnualDividendYield: number;
  currency: string;
  fromCurrency: any;
  toCurrency: any;
  lastMarket: any;
  coinMarketCapLink: any;
  algorithm: any;
  tradeable: boolean;
}

export interface Price {
  maxAge: number;
  preMarketSource: string;
  postMarketChangePercent: number;
  postMarketChange: number;
  postMarketTime: string;
  postMarketPrice: number;
  postMarketSource: string;
  regularMarketChangePercent: number;
  regularMarketChange: number;
  regularMarketTime: string;
  priceHint: number;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  averageDailyVolume10Day: number;
  averageDailyVolume3Month: number;
  regularMarketPreviousClose: number;
  regularMarketSource: string;
  regularMarketOpen: number;
  exchange: string;
  exchangeName: string;
  exchangeDataDelayedBy: number;
  marketState: string;
  quoteType: string;
  symbol: string;
  underlyingSymbol: any;
  shortName: string;
  longName: string;
  currency: string;
  quoteSourceName: string;
  currencySymbol: string;
  fromCurrency: any;
  toCurrency: any;
  lastMarket: any;
  marketCap: number;
}
export interface Search {
  explains: any[];
  count: number;
  quotes: Quote[];
  news: News[];
  nav: any[];
  lists: any[];
  researchReports: any[];
  screenerFieldResults: any[];
  totalTime: number;
  timeTakenForQuotes: number;
  timeTakenForNews: number;
  timeTakenForAlgowatchlist: number;
  timeTakenForPredefinedScreener: number;
  timeTakenForCrunchbase: number;
  timeTakenForNav: number;
  timeTakenForResearchReports: number;
  timeTakenForScreenerField: number;
  timeTakenForCulturalAssets: number;
}

export interface Quote {
  exchange: string;
  shortname: string;
  quoteType: string;
  symbol: string;
  index: string;
  score: number;
  typeDisp: string;
  longname: string;
  exchDisp: string;
  sector?: string;
  sectorDisp?: string;
  industry?: string;
  industryDisp?: string;
  dispSecIndFlag?: boolean;
  isYahooFinance: boolean;
}

export interface News {
  uuid: string;
  title: string;
  publisher: string;
  link: string;
  providerPublishTime: string;
  type: string;
  thumbnail: Thumbnail;
  relatedTickers: string[];
}

export interface Thumbnail {
  resolutions: Resolution[];
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
  tag: string;
}
