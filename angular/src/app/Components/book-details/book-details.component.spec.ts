import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:angular/src/app/Components/book-details/book-details.component.spec.ts
import { BookDetailsComponent } from './book-details.component';

describe('BookDetailsComponent', () => {
  let component: BookDetailsComponent;
  let fixture: ComponentFixture<BookDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookDetailsComponent);
========
import { RestPasswordComponent } from './rest-password.component';

describe('RestPasswordComponent', () => {
  let component: RestPasswordComponent;
  let fixture: ComponentFixture<RestPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestPasswordComponent);
>>>>>>>> 1149df0 (handling the authentication of the app):angular/src/app/Components/rest-password/rest-password.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
