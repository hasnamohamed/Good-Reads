import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsAndConditionComponent } from './teams-and-condition.component';

describe('TeamsAndConditionComponent', () => {
  let component: TeamsAndConditionComponent;
  let fixture: ComponentFixture<TeamsAndConditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsAndConditionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsAndConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
