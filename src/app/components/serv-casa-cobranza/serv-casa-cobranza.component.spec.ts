import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServCasaCobranzaComponent } from './serv-casa-cobranza.component';

describe('ServCasaCobranzaComponent', () => {
  let component: ServCasaCobranzaComponent;
  let fixture: ComponentFixture<ServCasaCobranzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServCasaCobranzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServCasaCobranzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
