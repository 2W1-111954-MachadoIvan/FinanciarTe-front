import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTransaccionComponent } from './vista-transaccion.component';

describe('VistaTransaccionComponent', () => {
  let component: VistaTransaccionComponent;
  let fixture: ComponentFixture<VistaTransaccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTransaccionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VistaTransaccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
