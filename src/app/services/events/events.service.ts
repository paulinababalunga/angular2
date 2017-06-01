import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class EventsService {

  getEvents() {
    let subject = new Subject();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number) {
    return EVENTS.find(event => event.id === id);
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
    date: '19/05/2016',
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
    date: '10/05/2017',
    time: '2:17 PM',
    price: 599.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Cluj',
      country: 'Romania'
    }
  },
  {
    id: 4,
    name: 'Angular Connect',
    date: '09/07/2015',
    time: '2:17 PM',
    price: 799.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Bucuresti',
      country: 'Romania'
    }
  }
];
