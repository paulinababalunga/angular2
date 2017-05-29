import {Component, OnInit} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: any;
  settings: {};
  data: any;
  source: LocalDataSource;

  constructor() {
    this.source = new LocalDataSource(this.data);
  }

  ngOnInit() {

    this.events = [
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
        date: '18/05/2017',
        time: '10:17 PM',
        price: 399.9,
        location: {
          address: 'Mosu nr.6',
          city: 'Iasi',
          country: 'Romania'
        }
      },
      {
        id: 3,
        name: 'Angular Connect',
        date: '18/05/2017',
        time: '2:17 PM',
        price: 399.9,
        location: {
          address: 'Mosu nr.6',
          city: 'Iasi',
          country: 'Romania'
        }
      }
    ];

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

    this.data = [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 2,
        name: "Leanne Sui",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 3,
        name: "Sander Graham",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 4,
        name: "Bram Bret",
        username: "Bret",
        email: "Sincere@april.biz"
      },
      {
        id: 5,
        name: "Nicholas DuBuque",
        username: "Nicholas.Stanton",
        email: "Rey.Padberg@rosamond.biz"
      }
    ];
  }

  handleEventClicked(data) {
    console.log("received:", data);
  }
}
