import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'app/services/api.service';


@Component({
  selector: 'app-dequeue',
  templateUrl: './dequeue.component.html',
  styleUrls: ['./dequeue.component.css']
})
export class DequeueComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  list: any;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      queue: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  show() {
    this.api.showDequeue()
    .subscribe(
      data => { this.list = data; },
      error => { console.log(error); }
    );
  }

  appened(value) {
    if (this.registerForm.invalid) {
      return;
    }

    this.api.appendDequeue(value)
      .subscribe(
        data => {
          this.show();
          this.onReset();
        },
        error => { console.log(error); }
      );
  }

  prepend(value) {
    if (this.registerForm.invalid) {
      return;
    }

    this.api.prependDequeue(value)
      .subscribe(
        data => {
          this.show();
          this.onReset();
        },
        error => { console.log(error); }
      );
  }

  pop() {
    this.api.popDequeue()
      .subscribe(
        data => {
          this.show();
          this.onReset();
        },
        error => { console.log(error); }
      );
  }

  eject() {
    this.api.ejectDequeue()
      .subscribe(
        data => {
          this.show();
          this.onReset();
        },
        error => { console.log(error); }
      );
  }

  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }


}
