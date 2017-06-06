import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ISessions} from '../../../services/events/event.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styleUrls: ['./create-session.component.scss']
})
export class CreateSessionComponent implements OnInit {

  sessionForm: FormGroup;
  name: FormControl;
  presenter: FormControl;
  duration: FormControl;
  level: FormControl;
  voters: FormControl;

  constructor(private route: Router) {
  }

  ngOnInit() {
    this.name = new FormControl('', Validators.required);
    this.presenter = new FormControl('', Validators.required);
    this.duration = new FormControl('', Validators.required);
    this.level = new FormControl('', Validators.required);
    this.voters = new FormControl('', Validators.required);

    this.sessionForm = new FormGroup({
      name: this.name,
      presenter: this.presenter,
      duration: this.duration,
      level: this.level,
      voters: this.voters
    })
  }

  saveSession(formValues) {
    let sessions: ISessions ={
      name: formValues.name,
      presenter: formValues.presenter,
      duration: +formValues.presenter,
      level: formValues.level,
      voters: formValues.voters,
      id: undefined
    };
    console.log(sessions);
    this.route.navigate(['events']);
  }

  cancel(){
    this.route.navigate(['events']);
  }
}
