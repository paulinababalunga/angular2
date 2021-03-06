import { Component, OnInit } from '@angular/core';
import {EventsService} from '../../services/events/events.service';
import {TableListService} from '../../services/tableData/table-list.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  settings = {};
  data: any[];
  constructor(private tableData: TableListService) { }

  ngOnInit() {
    this.data = this.tableData.getTableData();

    this.settings = {
      columns: {
        id: {
          title: 'ID'
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
}
