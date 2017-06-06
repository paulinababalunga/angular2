import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {EventsService} from '../../services/events/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  isDirty: boolean = true;
  constructor(private router: Router, private eventService: EventsService) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['/events']);
  }

  saveEvent(events) {
    this.eventService.saveEvent(events);
    this.isDirty = false;
    this.router.navigate(['/events']);
  }
}
