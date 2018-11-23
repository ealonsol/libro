import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProductModelosComponent } from './form-product-modelos.component';

describe('FormProductModelosComponent', () => {
  let component: FormProductModelosComponent;
  let fixture: ComponentFixture<FormProductModelosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormProductModelosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProductModelosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
