import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroDusuarioComponent } from './registro-dusuario.component';

describe('RegistroDusuarioComponent', () => {
  let component: RegistroDusuarioComponent;
  let fixture: ComponentFixture<RegistroDusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroDusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroDusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
