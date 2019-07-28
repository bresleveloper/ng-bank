import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsSummaryComponent } from './actions-summary.component';

describe('ActionsSummaryComponent', () => {
  let component: ActionsSummaryComponent;
  let fixture: ComponentFixture<ActionsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
