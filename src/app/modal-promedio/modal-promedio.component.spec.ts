import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPromedioComponent } from './modal-promedio.component';

describe('ModalPromedioComponent', () => {
  let component: ModalPromedioComponent;
  let fixture: ComponentFixture<ModalPromedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPromedioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPromedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
