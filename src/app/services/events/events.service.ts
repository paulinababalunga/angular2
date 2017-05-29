import {Injectable} from '@angular/core';

@Injectable()
export class EventsService{

  getEvents() {
    return EVENTS;
  }
}

const EVENTS = [
  {
    id: 1,
    name: 'Angular Connect',
    date: '18/05/2017',
    price: 399.9,
    time: "2:17 PM"
  },
  {
    id: 2,
    name: 'Angular Connect',
    date: '18/05/2017',
    time: '10:17 PM',
    price: 499.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Iasi',
      country: 'Romania'
    }
  },
  {
    id: 3,
    name: 'Angular Connect',
    date: '18/05/2017',
    time: '2:17 PM',
    price: 599.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Iasi',
      country: 'Romania'
    }
  }
];
