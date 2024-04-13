import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTimeOffsComponent } from './my-time-offs.component';

describe('MyTimeOffsComponent', () => {
  let component: MyTimeOffsComponent;
  let fixture: ComponentFixture<MyTimeOffsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyTimeOffsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyTimeOffsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
