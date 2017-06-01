import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {EventsService} from '../../services/events/events.service';
import {TableListService} from '../../services/tableData/table-list.service';
import {ToasterMessageService} from '../shared/toaster/services/toaster-message.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: any;

  constructor(private toasterService: ToasterMessageService,
              private route: ActivatedRoute) {
    this.toasterService = toasterService;
  }

  ngOnInit() {
    //this.eventService.getEvents().subscribe(events => {
    //this.events = events
    // });                                             => without resolver

    this.events = this.route.snapshot.data['events'];
  }

  handleEventClicked() {
    this.toasterService.showSuccess("Succes Toaster Message");
  }
}
