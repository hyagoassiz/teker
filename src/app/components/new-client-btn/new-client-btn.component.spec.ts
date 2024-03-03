import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewClientBtnComponent } from './new-client-btn.component';

describe('NewClientBtnComponent', () => {
  let component: NewClientBtnComponent;
  let fixture: ComponentFixture<NewClientBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewClientBtnComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewClientBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
