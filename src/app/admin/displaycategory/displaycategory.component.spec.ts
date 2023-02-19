import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycategoryComponent } from './displaycategory.component';

describe('DisplaycategoryComponent', () => {
  let component: DisplaycategoryComponent;
  let fixture: ComponentFixture<DisplaycategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
