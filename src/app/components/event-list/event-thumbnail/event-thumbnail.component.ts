import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-event-thumbnail',
  templateUrl: './event-thumbnail.component.html',
  styleUrls: ['./event-thumbnail.component.scss']
})
export class EventThumbnailComponent implements OnInit {

  @Input() event: any;

  @Output() eventClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleClickMe() {
    this.eventClick.emit(this.event.name);
  }
}
