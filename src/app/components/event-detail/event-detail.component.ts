import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EventsService} from '../../services/events/events.service';
import {ISessions} from '../../services/events/event.model';

@Component({
  selector: 'app-event-detail',
  templateUrl: 'event-detail.component.html',
  styleUrls: ['event-detail.component.scss']
})
export class EventDetailComponent implements OnInit {
  event: any;
  session: any;
  addMode: boolean;

  constructor(private eventsService: EventsService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.event = this.eventsService.getEvent(+this.route.snapshot.params['id']);
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISessions) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
    session.id = nextId + 1;
    this.event.sessions.push(session);
    this.eventsService.updateEvent(this.event);
    this.addMode = false;
  }

  cancelNewSession() {
    this.addMode = false;
  }
}
