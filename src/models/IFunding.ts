type Element = {
    exchange: string;
    symbol: string;
    bidPrice: string;
    askPrice: string;
    fundingRate: number;
    nextFundingTime: string;
  };

  export interface PositiveItem  {
    symbol: string;
    elems: Element[];
}

  export interface NegativeItem  {
    symbol: string;
    elems: Element[];
}

export interface IFunding {
    positive: PositiveItem[]
    negative: NegativeItem[]
}