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

  updateEvent(event) {
    let index = EVENTS.findIndex(x => x.id = event.id);
    EVENTS[index] = event;
  }
}

const EVENTS: IEvent[] = [
  {
    id: 1,
    name: 'Angular Connect1',
    date: new Date('10/07/2015'),
    price: 399.9,
    time: "2:17 PM",
    sessions: [
      {
        id: 11,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 2,
        level: 'beginner',
        voters: ['John Papa', 'Paula', 'Maria']
      },
      {
        id: 17,
        name: 'Ana Maria',
        presenter: 'John Papa',
        duration: 1,
        level: 'advanced',
        voters: ['John Papa', 'Paula']
      }]
  },
  {
    id: 2,
    name: 'Angular Connect2',
    date: new Date('09/04/2015'),
    time: '10:17 PM',
    price: 499.9,
    location: {
      address: 'Mosu nr.6',
      city: 'Iasi',
      country: 'Romania'
    },
    sessions: [{
      id: 12,
      name: 'Vasile Papa',
      presenter: 'John Papa',
      duration: 3,
      level: 'advanced',
      voters: ['John Papa']
    },
      {
        id: 13,
        name: 'John Papa',
        presenter: 'Tudor Papa',
        duration: 4,
        level: 'beginner',
        voters: ['John Papa', 'Paula']

      },
      {
        id: 15,
        name: 'Sanea Papa',
        presenter: 'John Papa',
        duration: 20,
        level: 'advanced',
        voters: ['John Papa', 'Paula','Madalina', 'Catalina']

      },
      {
        id: 16,
        name: 'Tatiana Papa',
        presenter: 'John Papa',
        duration: 1,
        level: 'beginner',
        voters: ['John Papa', 'Paula']

      }]
  },
  {
    id: 3,
    name: 'Angular Connect3',
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
      name: 'Sorin Papa',
      presenter: 'John Papa',
      duration: 2,
      level: 'intermediate',
      voters: ['John Papa', 'Paula', 'Ion', 'Sorin']
    }]
  },
  {
    id: 4,
    name: 'Angular Connect4',
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
      duration: 3,
      level: 'advanced',
      voters: ['John Papa', 'Paula']
    },
      {
        id: 15,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 3,
        level: 'advanced',
        voters: ['John Papa', 'Paula','Tudor', 'Andreea', 'Maya']
      },
      {
        id: 15,
        name: 'John Papa',
        presenter: 'John Papa',
        duration: 3,
        level: 'beginner',
        voters: ['John Papa']
      }]
  }
];
