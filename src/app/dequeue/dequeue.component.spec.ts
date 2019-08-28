import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DequeueComponent } from './dequeue.component';

describe('DequeueComponent', () => {
  let component: DequeueComponent;
  let fixture: ComponentFixture<DequeueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DequeueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DequeueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
