import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarCargoComponent } from './cadastrar-cargo.component';

describe('CadastrarCargoComponent', () => {
  let component: CadastrarCargoComponent;
  let fixture: ComponentFixture<CadastrarCargoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarCargoComponent]
    });
    fixture = TestBed.createComponent(CadastrarCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
