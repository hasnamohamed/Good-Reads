/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Display_user_booksComponent } from './display_user_books.component';

describe('Display_user_booksComponent', () => {
  let component: Display_user_booksComponent;
  let fixture: ComponentFixture<Display_user_booksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Display_user_booksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Display_user_booksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
