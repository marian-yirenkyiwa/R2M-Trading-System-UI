export interface Portfolio {
  portfolioName: string;
}

export interface PortfolioResponse{
    portfolioId: number;
    portfolioName: string;
    dateCreated: Date;
    portfolioWorth:number;
    clientId: number;
}
