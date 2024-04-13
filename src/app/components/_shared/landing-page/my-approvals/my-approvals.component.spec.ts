import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyApprovalsComponent } from './my-approvals.component';

describe('MyApprovalsComponent', () => {
  let component: MyApprovalsComponent;
  let fixture: ComponentFixture<MyApprovalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyApprovalsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
