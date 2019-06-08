import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-museum',
  templateUrl: './museum.component.html',
  styleUrls: ['./museum.component.css']
})
export class MuseumComponent implements OnInit {
  router: any;

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit() {
    this.router = this.injector.get(Router);
    console.log(this.router);
  }

}
