import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteDatailComponent } from './cliente-datail.component';

describe('ClienteDatailComponent', () => {
  let component: ClienteDatailComponent;
  let fixture: ComponentFixture<ClienteDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClienteDatailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClienteDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
