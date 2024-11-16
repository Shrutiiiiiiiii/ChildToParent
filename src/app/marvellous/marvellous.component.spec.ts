import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MArvellousComponent } from './marvellous.component';

describe('MArvellousComponent', () => {
  let component: MArvellousComponent;
  let fixture: ComponentFixture<MArvellousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MArvellousComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MArvellousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
