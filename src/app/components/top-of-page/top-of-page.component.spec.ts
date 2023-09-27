import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopOfPageComponent } from './top-of-page.component';

describe('TopOfPageComponent', () => {
  let component: TopOfPageComponent;
  let fixture: ComponentFixture<TopOfPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopOfPageComponent]
    });
    fixture = TestBed.createComponent(TopOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
