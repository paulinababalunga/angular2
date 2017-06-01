import {Injectable} from '@angular/core';
import {EventsService} from './events.service';
import {Resolve} from '@angular/router';

@Injectable()
export class EventListResolverService implements Resolve <any> {

  constructor(private eventService: EventsService) {
  }

  resolve() {
    return this.eventService.getEvents().map(events => events); // => pre-loading data for component
  }
}
