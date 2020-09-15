import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullbannerComponent } from './fullbanner.component';

describe('FullbannerComponent', () => {
  let component: FullbannerComponent;
  let fixture: ComponentFixture<FullbannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullbannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullbannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
