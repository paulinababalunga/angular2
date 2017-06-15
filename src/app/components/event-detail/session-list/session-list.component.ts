import {Component, OnChanges, Input} from '@angular/core';
import {ISessions} from '../../../services/events/event.model';

@Component({
  selector: 'app-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.scss']
})
export class SessionListComponent implements OnChanges {

  constructor() {
  }

  @Input() sessions: ISessions[];
  @Input() filterBy: string;
  @Input() sortBy: string;
  visibleSessions: ISessions[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filterBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesAsc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = this.sessions.filter(session => {
        return session.level.toLocaleLowerCase() === filter;
      })
    }
  }
}

function sortByNameAsc(s1: ISessions, s2: ISessions) {
  if (s1.name > s2.name) {
    console.log(s1.name);
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesAsc(s1: ISessions, s2: ISessions) {
  return s1.voters.length - s2.voters.length;
}
