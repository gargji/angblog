import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterdisplayComponent } from './registerdisplay.component';

describe('RegisterdisplayComponent', () => {
  let component: RegisterdisplayComponent;
  let fixture: ComponentFixture<RegisterdisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterdisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterdisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
