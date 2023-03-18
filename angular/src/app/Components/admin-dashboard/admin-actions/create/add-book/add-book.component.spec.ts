/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { addBookComponent } from './add-book.component';

describe('addBookComponent', () => {
  let component: addBookComponent;
  let fixture: ComponentFixture<addBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ addBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(addBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
