import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphealthComponent } from './apphealth.component';

describe('ApphealthComponent', () => {
  let component: ApphealthComponent;
  let fixture: ComponentFixture<ApphealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApphealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
