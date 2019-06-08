import { Component, OnInit, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;

  constructor(
    private injector: Injector,
  ) { }

  ngOnInit() {
    this.router = this.injector.get(Router);
  }

}
