import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {EventsService} from '../../services/events/events.service';
import {TableListService} from '../../services/tableData/table-list.service';
import {ToasterMessageService} from '../shared/toaster/services/toaster-message.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  events: any[];
  data: any[];
  settings: {};
  source: LocalDataSource;

  constructor(private eventService: EventsService,
              private tableData: TableListService,
              private toasterService: ToasterMessageService) {
    this.source = new LocalDataSource(this.data);
    this.toasterService = toasterService;
  }

  ngOnInit() {
    this.events = this.eventService.getEvents();
    this.data = this.tableData.getTableData();

    this.settings = {
      columns: {
        id: {
          title: 'ID',
          filter: true
        },
        name: {
          title: 'Full Name'
        },
        username: {
          title: 'User Name'
        },
        email: {
          title: 'Email'
        }
      }
    };
  }

  handleEventClicked() {
    this.toasterService.showSuccess("Succes Toaster Message");
  }
}
