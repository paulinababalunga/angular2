import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
  settings = {};
  constructor() { }

  ngOnInit() {
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
