import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductValidComponent } from './form-product-valid.component';

describe('FormProductValidComponent', () => {
  let component: FormProductValidComponent;
  let fixture: ComponentFixture<FormProductValidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductValidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductValidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
