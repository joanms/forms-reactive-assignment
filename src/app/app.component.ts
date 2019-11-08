import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  statuses: ['Stable', 'Critical', 'Finished'];
  signupForm: FormGroup;
  forbiddenProjectName = 'Test';

  constructor() {}

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl('Stable')
    });

  }
}
