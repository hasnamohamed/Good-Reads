/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Popular_booksComponent } from './popular_books.component';

describe('Popular_booksComponent', () => {
  let component: Popular_booksComponent;
  let fixture: ComponentFixture<Popular_booksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popular_booksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popular_booksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
