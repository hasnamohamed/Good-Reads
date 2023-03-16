/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Popular_categoriesComponent } from './popular_categories.component';

describe('Popular_categoriesComponent', () => {
  let component: Popular_categoriesComponent;
  let fixture: ComponentFixture<Popular_categoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Popular_categoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Popular_categoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
