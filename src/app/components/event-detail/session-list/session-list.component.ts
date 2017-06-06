import {Component, OnInit, Input} from '@angular/core';
import {ISessions} from '../../../services/events/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnInit {

  constructor() {}

  @Input() sessions: ISessions[];

  ngOnInit() {
  }
}
