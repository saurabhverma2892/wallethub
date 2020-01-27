import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeChildTwoComponent } from './three-child-two.component';

describe('ThreeChildTwoComponent', () => {
  let component: ThreeChildTwoComponent;
  let fixture: ComponentFixture<ThreeChildTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeChildTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeChildTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
