import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {IEvent} from './event.model';

@Injectable()
export class EventsService {

  getEvents(): Subject<IEvent> {
    let subject = new Subject();

    setTimeout(() => {
      subject.next(EVENTS);
      subject.complete();
    }, 100);
    return subject;
  }

  getEvent(id: number): IEvent {
    return EVENTS.find(event => event.id === id);
  }

  saveEvent(event) {
    event.id = 999;
    event.session = [];
    EVENTS.push(event);
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Angular Connect',
    date: new Date('18/05/2017'),
    price: 399.9,
    time: "2:17 PM",
    sessions: [
      {
        id: 11,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 20,
        level: '2',
        voters: ['John Papa', 'Paula']
      },
      {
        id: 17,
        name: 'John Papa1',
        presenter: 'John Papa',
        duration: 20,
        level: '2',
        voters: ['John Papa', 'Paula']
      }]
  },
  {
    id: 2,
    name: 'Angular Connect',
    date: new Date('19/05/2016'),
    time: '10:17 PM',
    price: 499.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Iasi',
      country: 'Romania'
    },
    sessions: [{
      id: 12,
      name: 'John Papa',
      presenter: 'John Papa',
      duration: 20,
      level: '2',
      voters: ['John Papa', 'Paula']
    },
      {
        id: 12,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 20,
        level: '2',
        voters: ['John Papa', 'Paula']

      },
      {
        id: 15,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 20,
        level: '2',
        voters: ['John Papa', 'Paula']

      },
      {
        id: 16,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 20,
        level: '2',
        voters: ['John Papa', 'Paula']

      }]
  },
  {
    id: 13,
    name: 'Angular Connect',
    date: new Date('10/05/2017'),
    time: '2:17 PM',
    price: 599.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Cluj',
      country: 'Romania'
    },
    sessions: [{
      id: 14,
      name: 'John Papa',
      presenter: 'John Papa',
      duration: 20,
      level: '2',
      voters: ['John Papa', 'Paula']
    }]
  },
  {
    id: 4,
    name: 'Angular Connect',
    date: new Date('09/07/2015'),
    time: '2:17 PM',
    price: 799.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Bucuresti',
      country: 'Romania'
    },
    sessions: [{
      id: 15,
      name: 'John Papa',
      presenter: 'John Papa',
      duration: 20,
      level: '2',
      voters: ['John Papa', 'Paula']
    }]
  }
];
