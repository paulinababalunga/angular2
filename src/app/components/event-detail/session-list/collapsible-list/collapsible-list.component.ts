import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-collapsible-list',
  templateUrl: './collapsible-list.component.html',
  styleUrls: ['./collapsible-list.component.scss']
})
export class CollapsibleListComponent implements OnInit {

  @Input() title: string;
  visible: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  contetToggle(){
    this.visible = !this.visible;
  }
}
