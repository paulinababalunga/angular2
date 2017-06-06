export interface IEvent {
  id: number,
  name: string,
  date: Date,
  time: string,
  price: number,
  location?: {
    address: string,
    country: string,
    city: string
  }
  sessions: ISessions[];
}

export interface ISessions {
  id: number,
  name: string,
  presenter: string,
  duration: number,
  level: string,
  voters: string[]
}
