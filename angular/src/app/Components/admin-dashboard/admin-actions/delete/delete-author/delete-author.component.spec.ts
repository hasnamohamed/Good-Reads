import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAuthorComponent } from './delete-author.component';

describe('DeleteAuthorComponent', () => {
  let component: DeleteAuthorComponent;
  let fixture: ComponentFixture<DeleteAuthorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteAuthorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
