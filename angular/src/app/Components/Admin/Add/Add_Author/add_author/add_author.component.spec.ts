/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_authorComponent } from './add_author.component';

describe('Add_authorComponent', () => {
  let component: Add_authorComponent;
  let fixture: ComponentFixture<Add_authorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_authorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_authorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
