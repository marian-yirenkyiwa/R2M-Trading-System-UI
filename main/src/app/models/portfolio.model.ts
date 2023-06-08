export interface Portfolio {
  portfolioname: string;
}

export interface PortfolioResponse{
    portfolioId: number;
    portfolioName: string;
    dateCreated: Date;
    portfolioWorth:number;
    clientId: number;
}
