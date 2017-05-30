import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot} from '@angular/router';
import {EventsService} from '../events/events.service';

@Injectable()
export class EventRouteActivatorService implements CanActivate {

  constructor(private eventService: EventsService, private route: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const eventExist = !!this.eventService.getEvent(+route.params['id']);

    if (!eventExist)
      this.route.navigate(['/404']);

    return eventExist;
  }
}

// + => cast to number
// !! => cast to boolean
