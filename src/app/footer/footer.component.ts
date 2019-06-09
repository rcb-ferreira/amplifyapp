import { Component, OnInit, Injector } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';
import { of } from 'rxjs';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  form: FormGroup;
  orders = [];
  router: Router;
  systemLang: any;

  constructor(
    private formBuilder: FormBuilder,
    private injector: Injector,
    ) {
    console.log(window.location.host);
    this.router = this.injector.get(Router);
    this.systemLang = JSON.parse(localStorage.getItem('lang')) || { orders: 2};
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      orders: ['']
    });

    // async orders
    const key = 'id';
    of(this.getOrders()).subscribe(orders => {
      this.orders = orders;
      const order = this.orders.filter(value => value.id === +this.systemLang.orders );
      this.form.controls.orders.patchValue(order[0][key]);
    });
  }

  getOrders() {
    return [
      { id: 1, name: 'English' },
      { id: 2, name: 'Portagues' }
    ];
  }

  submit(value) {
    localStorage.setItem('lang', JSON.stringify(value));
    let lang = `//${window.location.host}/en`;
    if (+value.orders > 1) {
      lang = `//${window.location.host}/pt`;
    }
    console.log(lang);
    document.location.replace(lang);
  }
}
