import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeChildThreeComponent } from './three-child-three.component';

describe('ThreeChildThreeComponent', () => {
  let component: ThreeChildThreeComponent;
  let fixture: ComponentFixture<ThreeChildThreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeChildThreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeChildThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
