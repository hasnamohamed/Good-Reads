/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Popular_authorsComponent } from './popular_authors.component';

describe('Popular_authorsComponent', () => {
  let component: Popular_authorsComponent;
  let fixture: ComponentFixture<Popular_authorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popular_authorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popular_authorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
